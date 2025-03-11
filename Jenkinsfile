pipeline {
    agent any

    parameters {
        string(name: 'TEST_URL', defaultValue: 'https://example.com', description: 'Test-URL für Playwright')
        choice(name: 'BROWSER_TYPE', choices: ['chromium', 'firefox', 'webkit'], description: 'Browser für den Test')
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ameerwebdeveloper/jenkinsTest.git'
            }
        }
        
        stage('Set Playwright Permissions') {
            steps {
                echo 'Setting execute permissions for Playwright...'
                sh 'chmod +x node_modules/.bin/playwright'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                echo 'Installing Playwright Browsers...'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Test') {
            steps {
                echo 'Running Playwright test: TestUrl.spec.js'
                sh '''
                    export TEST_URL=${TEST_URL}
                    export BROWSER_TYPE=${BROWSER_TYPE}
                    npx playwright test tests/TestUrl.spec.js --project=${BROWSER_TYPE} --reporter=junit --output=TestReport.xml
                '''
            }
        }
    }

    post {
        always {
            junit 'TestReport.xml'
            cleanWs()
        }
    }
}
