# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 

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

entity Scraper
entity Scraper.type
entity Scraper.id

entity ScraperInstance
entity ScraperInstance.id
entity ScraperInstance.data
entity ScraperInstance.flag

entity Message
entity Message.id
entity Message.data

entity Metadata
entity Metadata.id
entity Metadata.key
entity Metadata.value

Query.created --* Query
Query.id --* Query
Query.description --* Query
Query.name --* Query
Query.modified --* Query

User.id -r-* User
User.login -u-* User
User.password -u-* User
User.email -l-* User

Result.id --* Result
Result.name -r-* Result
Result.description --* Result

Role.id -u-* Role
Role.name -u-* Role
Role.description -r-* Role

Source.url --* Source
Source.id --* Source
Source.key --* Source

Scraper.type --* Scraper
Scraper.id --* Scraper

ScraperInstance.id -l-* ScraperInstance
ScraperInstance.data --* ScraperInstance
ScraperInstance.flag --* ScraperInstance

Message.id -r-* Message
Message.data -l-* Message

Metadata.id -u-* Metadata
Metadata.key -u-* Metadata
Metadata.value -u-* Metadata

Query "0,*" -d- "0,*" Access
Query "0,*" -d- "1,1" Result
Query "0,*" -d- "1,1" Source
Access "0,*" -d- "1,1" User
Access "0,*" -- "1,1" Role
Source "1.1" -d- "0,*" Scraper
Scraper "1,1" -d- "0,*" ScraperInstance
Message "0,*" -u- "1,1" ScraperInstance
Metadata "0,*" -u- "1,1" Message

@enduml
- ER-модель
- @startuml

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
  email: text
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

entity Scraper {
  id: int
  type: text
}

entity ScraperInstance {
  id: int
  data: text
  flag: uri-reference
}

entity Message {
  id: int
  data: text
}

entity Metadata {
  id: int
  key: int
  value: text
}

Query "0,*" -l- "0,*" Access 
Query "0,*" -- "1,1" Source 
Query "0,*" -r- "1,1" Result 
User "1,1" -u- "0,*" Access 
Role "1,1" -r- "0,*" Access
Source "1,1" -- "0,*" Scraper
Scraper "1,1" -- "0,*" ScraperInstance
ScraperInstance "1,1" -- "0,*" Message
Message "1,1" -- "0,*" Metadata

@enduml
- реляційна схема

