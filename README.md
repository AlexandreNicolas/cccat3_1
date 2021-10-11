# Clean Code e Clean Architecture

Este conteúdo é parte do curso Clean Code e Clean Architecture da Branas.io

Para mais informações acesse:

https://app.branas.io/clean-code-e-clean-architecture

## Instruções:

npm install
npm run test

## Instalar PostgreSQL

brew doctor
brew update
brew install postgres

ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
alias pg_start="launchctl load ~/Library/LaunchAgents"
alias pg_stop="launchctl unload ~/Library/LaunchAgents"

psql --version
psql -h localhost -p 5432  -d postgres --password