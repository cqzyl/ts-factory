/*
 * @Description: 
 * @Author: ChenQiang
 * @Date: 2023-11-03 14:35:16
 * @LastEditors: ChenQiang
 * @LastEditTime: 2023-11-03 17:30:36
 * @FilePath: \src\printer\impl\Printer268.ts
 */

import { Printer } from "../Printer";

export class Printer268 implements Printer {
  print() {
    return new Promise<boolean>((resolve, reject) => {
      return resolve(true);
    });
  };
}
