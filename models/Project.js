import Realm from "realm"
import { Task } from "./Task"
import createRealmContext from "realm"
export class Project{
    constructor({id = new Realm.BSON.ObjectId(),name}){
        this.name = name
        this.createdAt = new Date()
        this.tasks = []
        this.id = id

    }


    static schema = {
        name: 'Project',
        primaryKey: '_id',
        properties: {
          _id: 'objectId',
          name: 'string',
          tasks: 'Task[]',
          createdAt: 'date'
        },
      };
}
export const { useRealm, useQuery, RealmProvider } = createRealmContext({
    schema: [Task.schema, Project.schema],
    deleteRealmIfMigrationNeeded: true,
  });