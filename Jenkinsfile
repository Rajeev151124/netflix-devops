pipeline {
    agent any

    environment {
        DOCKERHUB = "rajeevreddy1511"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', 'https://github.com/Rajeev151124/netflix-devops.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB/netflix-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB/netflix-frontend ./frontend'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds',
                usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                }
            }
        }

        stage('Push Images') {
            steps {
                sh 'docker push $DOCKERHUB/netflix-backend'
                sh 'docker push $DOCKERHUB/netflix-frontend'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
