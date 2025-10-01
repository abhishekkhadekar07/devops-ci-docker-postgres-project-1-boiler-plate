for client file
npm i -D eslint prettier @eslint/js globals  eslint-plugin-react-hooks eslint-plugin-react-refresh

server
npm i -D prettier


name: build and lint 

on:
  push:
    branches:
      - [main,master,dev]
  pull_request:
    branches:
      - [main,master,dev]
jobs:
  build and lint:
    runs-on: ubuntu-latest
    steps:
      - name: checkout repo
        uses: actions/checkout@v2
      - name: set up node
        uses: actions/setup-node@v3
        with:
          node-version: 22     
      - name: Install backend dependencies
        working-directory: backend
        run: npm ci
      - name: Lint backend
        working-directory: backend
        run: npm run lint
      - name: Install frontend dependencies
        working-directory: frontend
        run: npm ci
      - name: Lint frontend
        working-directory: frontend
        run: npm run lint


        In order to get you api working u have to create table inside postgres
        probable command 
        docker run exec sh psql -U abhishek -D testdb 
