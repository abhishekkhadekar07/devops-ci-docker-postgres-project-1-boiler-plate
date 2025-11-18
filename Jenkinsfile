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
    }
}
