pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Build') {
            steps {
                echo "Code pushed! Running pipeline..."
            }
        }
       stage('test') {
            steps {
                echo "test is running"
            }
        }
        stage('docker build') {
            steps {
                echo "docker build"
            }
        }  
       stage('Deploy') {
            steps {
                echo "docker build"
            }
        }
    }
}
