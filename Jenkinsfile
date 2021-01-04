pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                node('docker') {    
                cd /home/sysadmin && git clone https://github.com/sameeraja-ops/konaproject.git
                echo "$(BUILD_ID)"
            }
            }
            }
            }
            }
