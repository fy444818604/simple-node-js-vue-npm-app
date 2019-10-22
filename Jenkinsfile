pipeline {
    agent {
        docker {
            image 'node:8-alpine'
            args '-p 3001:3001'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
				sh './jenkins/scripts/build.sh'
            }
        }
    }
}