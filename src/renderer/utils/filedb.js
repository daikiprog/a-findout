import DropDB from 'dropdb'
import path from 'path'
import { remote } from 'electron'
var db = {}

db.accounts = new DropDB( path.join( remote.app.getPath('userData'), '/db'), 'accounts.db' )
export default db