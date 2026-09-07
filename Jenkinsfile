// Jenkinsfile

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub
                git branch: 'main', url: 'https://github.com/your-username/todo-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Add tests later (Mocha/Jest)
                sh 'echo "No tests yet, skipping..."'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t todo-app .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag todo-app $DOCKER_USER/todo-app:latest'
                    sh 'docker push $DOCKER_USER/todo-app:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Example: run container on server
                sh 'docker run -d -p 3000:3000 --name todo-app-container todo-app'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build or deployment failed.'
        }
    }
}
