pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/sumeet2608/devops-cicd-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('node-express-hello-world') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Application') {
            steps {
                dir('node-express-hello-world') {
                    sh 'nohup npm start &'
                }
            }
        }
    }
}