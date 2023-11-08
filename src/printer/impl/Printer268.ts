/*
 * @Description: 
 * @Author: ChenQiang
 * @Date: 2023-11-03 14:35:16
 * @LastEditors: ChenQiang
 * @LastEditTime: 2023-11-08 11:24:56
 * @FilePath: \src\printer\impl\Printer268.ts
 */

import { Printer } from "../Printer";

export class Printer268 implements Printer {
  print(): Promise<boolean> {
    return new Promise<boolean>((resRej, reject) => {
      return Promise.resolve(true);
    });
  };
}
