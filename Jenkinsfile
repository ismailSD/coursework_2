pipeline {
    agent any
    stages {
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
     
    } 
}
