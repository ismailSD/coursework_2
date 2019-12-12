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
        
        
    environment {
    registry = "gustavoapolinario/docker-test"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
    stage('Cloning Git') {
      steps {
        git 'https://github.com/ismailSD/coursework_2.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
        
        
        
        stage('SonarQube') {
            environment {
                scannerHome = tool 'SonarQube'
            }
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
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
                sh './kill.sh'
            }
        }
    } 
}
