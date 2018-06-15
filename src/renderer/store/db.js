import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

// var db = new Datastore({  
//     autoload: true,
//     filename: path.join(remote.app.getPath('userData'), 'db/device.db') 
// });

const db = {
    tableData: new Datastore({autoload: true,filename: path.join(remote.app.getPath('userData'), '/tableData.db')}),
    adminData: new Datastore({autoload: true,filename: path.join(remote.app.getPath('userData'), '/adminData.db')}),
    
}



// 账户初始化操作 清空数据库
// db.tableData.remove({}, { multi: true });
// db.adminData.remove({},{ multi: true });

export default db;