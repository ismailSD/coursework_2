pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './test.sh' 
            }
        }
        stage('Deliver') {
            steps {
                sh './deliver.sh'
                input message: 'Fisnished using the server app? continue'
                sh './kill.bash'
            }
        }
    } 
}
