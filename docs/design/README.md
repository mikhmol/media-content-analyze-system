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

Query.created --* Query 
Query.id --* Query 
Query.description --* Query
Query.name --* Query 
Query.modified --* Query 

entity User
entity User.id
entity User.login
entity User.password
entity User.email

User.id -u-* User 
User.login -u-* User 
User.password -r-* User 
User.email --* User 

entity Result
entity Result.id
entity Result.name
entity Result.description

Result.id --* Result 
Result.name --* Result 
Result.description -l-* Result

entity Role
entity Role.id
entity Role.name
entity Role.description

Role.id -u-* Role 
Role.name -u-* Role 
Role.description -u-* Role

entity Source
entity Source.url
entity Source.id
entity Source.key

Source *-- Source.url 
Source *-- Source.id 
Source *-- Source.key

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

Query "0,*" -r- "1,1" Source 
Query "0,*" -- "1,1" Result 
User "1,1" -u- "0,*" Query 
Role "1,1" -l- "0,*" Query

@enduml


