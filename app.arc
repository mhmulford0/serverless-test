@app
serverless-test


@plugins
architect/plugin-typescript


@aws
# profile default
region us-east-1
architecture arm64
runtime typescript

@tables
people
  id *String
  name *String
  email *string


@http
get /
get /people
get /add-people

post /person