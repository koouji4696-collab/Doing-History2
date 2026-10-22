/* ============================================================
   歴史するアプリ Doing History 2 〜問いのバトン〜
   設定ファイル

   書き換えるのは下の1行（API）だけです。
   生徒用URLと先生用URLは、開いているアドレスから自動で割り出すので
   設定する必要はありません。
   index.html と kyoin.html は、以後そのまま上書きして構いません。
   ============================================================ */

/* Apps Script のウェブアプリURL（末尾が /exec） */
var API = 'https://script.google.com/macros/s/AKfycbwgCoawanHiGMbG13NW5PQTG-XbtUtOl_i2lOb2QbhwyP4GaXZqNguu3ECY3502nOk/exec';


/* ---- 以下は保険。ふつうは触らなくて構いません ---- */

/* 生徒用ページのURL。
   教員卓のQRは、いま開いているアドレスから自動で作ります。
   うまくいかないときだけ、ここに正しいURLを書いてください。 */
var STUDENT_URL = '';

/* 先生用ページのURL。
   生徒画面のリンクは同じフォルダの kyoin.html を直接指すので、
   この値は使いません。 */
var TEACHER_URL = '';
