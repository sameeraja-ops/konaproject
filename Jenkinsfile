pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                node('docker') {    
                sh 'cd /home/sysadmin && git clone https://github.com/sameeraja-ops/konaproject.git'
                sh 'echo $(BUILD_ID) '
            }
            }
            }
            }
            }
