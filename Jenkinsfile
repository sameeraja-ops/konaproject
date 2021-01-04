pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                node('docker') {   
                sh 'mkdir /home/sysadmin/maincode'
                sh 'cd /home/sysadmin/maincode || cd /home/sysadmin/maincode && git clone https://github.com/sameeraja-ops/konaproject.git'
                sh 'echo $(BUILD_ID) '
            }
            }
            }
            }
            }
