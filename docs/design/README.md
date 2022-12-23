# Проєктування бази даних

В рамках проекту розробляється: 
## Модель бізнес-об'єктів 

@startuml

entity Query
entity Query.created
entity Query.id
entity Query.description
entity Query.name
entity Query.modified

entity Access

entity User
entity User.id
entity User.login
entity User.password
entity User.email

entity Result
entity Result.id
entity Result.name
entity Result.description

entity Role
entity Role.id
entity Role.name
entity Role.description

entity Source
entity Source.url
entity Source.id
entity Source.key

@enduml

## ER-модель

@startuml 

entity Query {
  id: int
  name: text
  description: text
  created: datetime
  modified: datetime
  }

entity Access { }

entity User {
id: int
login: text
name: text
password: text
}

entity Result {
id: int
name: text
description: text
}

entity Role {
id: int
name: text
description: text
}

entity Source {
id: int
url: uri-reference
key: int
}

Query "0,*" -d- "0,*" Access 
Query "0,*" -r- "1,1" Source 
Query "0,*" -- "1,1" Result 
User "1,1" -u- "0,*" Access 
Role "1,1" -l- "0,*" Access

@enduml


