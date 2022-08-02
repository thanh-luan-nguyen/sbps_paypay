/**
 * SBPaymentに関連するlib
 */
 import * as CryptoJS from 'crypto-js'
 // import Encoding from 'encoding-japanese'
 
 
 /**
   * 
   * @param {arr} SBpaymentでのparamsの配列
   * @return 連結された文字列にUTF8に変換された値
   * memo: arrの中には吐き出されたhashKeyがあるらしく、それも混ぜる必要がある
   */
  export const SBConvertToUTF8 = (arr) => {
	const str = arr.join('')
	return CryptoJS.enc.Utf8.parse(str)
  }
 
 /**
  * @param {string} utf8に変換されたもの
  * @return SHA1でハッシュ演算された値
  */
  export const SbHash = (utf8str) => {
   return CryptoJS.SHA1(utf8str)
 }