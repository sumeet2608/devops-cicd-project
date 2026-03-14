pipeline {
    agent any

    stages {

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