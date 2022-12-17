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
entity User.login
entity User.password
entity User.name
entity User.email

entity Result
entity Result.id
entity Result.name
entity Result.description

entity Role
entity Role.name
entity Role.description

entity Source
entity Source.url
entity Source.id
entity Source.key

@enduml
- ER-модель
- реляційна схема

