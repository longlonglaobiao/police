import xlsx from "xlsx";
export default {
    formatDate(date, fmt) {
        let d = new Date(date)
        var o = {
            "M+": d.getMonth() + 1, //月份
            "d+": d.getDate(), //日
            "h+": d.getHours(), //小时
            "m+": d.getMinutes(), //分
            "s+": d.getSeconds(), //秒
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度
            "S": d.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, o[k].toString().padStart(RegExp.$1.length, '0'));
        }
        return fmt;
    },
    transformSheets(sheets) {
        var content = [];
        var content1 = [];
        var tmplist = [];
        for (let key in sheets) {
            //读出来的workbook数据很难读,转换为json格式,参考https://github.com/SheetJS/js-xlsx#utility-functions
            tmplist.push(xlsx.utils.sheet_to_json(sheets[key]).length);
            content1.push(xlsx.utils.sheet_to_json(sheets[key]));
        }
        var maxLength = Math.max.apply(Math, tmplist);
        //进行行列转换
        for (let y in [...Array(maxLength)]) {
            content.push([]);
            for (let x in [...Array(tmplist.length)]) {
                try {
                    for (let z in content1[x][y]) {
                        content[y].push(content1[x][y][z]);
                    }
                } catch (error) {
                    content[y].push(" ");
                }
            }
        }
        content.unshift([]);
        for (let key in sheets) {
            content[0].push(key);
        }
        return content;
    },


    initDB(databaseName, table) {
        var db;
        var request = indexedDB.open(databaseName);
        request.onerror = function (event) {
            console.log('数据库打开报错');
        };
        request.onsuccess = function (event) {
            db = request.result;
            console.log('数据库打开成功');
        };
        request.onupgradeneeded = function (event) {
            db = event.target.result;
            var objectStore;
            if (!db.objectStoreNames.contains(table)) {
                objectStore = db.createObjectStore(table, { autoIncrement: true });
            }
        }
        return db
    },
}
