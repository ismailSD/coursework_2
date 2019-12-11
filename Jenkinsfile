pipeline {
    agent any
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
        stage('Sonar Analyse') {
        steps {
            nodejs(nodeJSInstallationName: 'NodeJSAuto', configId: '') {
                script {
                    withSonarQubeEnv('My server') {
                    def scannerHome = tool 'sonarScanner';
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
            }
        }
    }
        stage('Deliver') {
            steps {
                sh './deliver.sh'
                input message: 'Fisnished using the server app? continue'
                sh './kill.sh'
            }
        }
    } 
}
