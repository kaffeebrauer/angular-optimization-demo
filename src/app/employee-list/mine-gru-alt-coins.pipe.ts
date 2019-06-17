import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator'; //https://www.npmjs.com/package/memo-decorator

const mineGruAltCoins = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return mineGruAltCoins(num - 1) + mineGruAltCoins(num - 2);
};
//Two properties
//No side effects
//Same result for same argument
//Prime candidate for pure pipes


@Pipe({
  pure: true,
  name: 'mineGruAltCoins'
})
export class MineGruAltCoinsPipe implements PipeTransform {

  @memo()
  transform(value: any, args?: any): any {
    console.log('Calculating alt coin value: ' + value);
    return mineGruAltCoins(value);
  }

}
