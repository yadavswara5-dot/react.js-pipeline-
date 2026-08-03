pipeline {
    agent any

    stages {

        stage('Application Info') {
            steps {
                echo '===================================='
                echo '      REACT CI/CD PIPELINE'
                echo '===================================='
                echo 'Application Type: React.js'
                echo "Branch: ${env.BRANCH_NAME}"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing React dependencies...'
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Building React application...'
                sh 'npm run build'
            }
        }
    }

    post {

        success {
            echo '===================================='
            echo 'PIPELINE STATUS: SUCCESS'
            echo 'React application build successful!'
            echo '===================================='
        }

        failure {
            echo '===================================='
            echo 'PIPELINE STATUS: FAILURE'
            echo 'Something went wrong!'
            echo 'Deployment will be skipped.'
            echo '===================================='
        }
    }
}
