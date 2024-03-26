import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  async extractDataFromExcel(file: File): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        try {
          const arrayBuffer = fileReader.result as ArrayBuffer;
          const data = this.parseExcelData(arrayBuffer);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };

      fileReader.readAsArrayBuffer(file);
    });
  }

  private parseExcelData(buffer: ArrayBuffer): any[] {
    const data = new Uint8Array(buffer);
    const workbook = XLSX.read(data, { type: 'array', raw: true });

    // Assuming the first sheet is the one you want to read
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

    return jsonData;
  }
}