pipeline {
    agent { docker 'node:latest' }
    stages {
        stage('Install') {
            steps {
                sh 'npm run install-dep'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }   
    }
}
