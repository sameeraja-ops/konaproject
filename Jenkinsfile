pipeline {
    agent any

    stages {
        stage('init') {
            steps {
                node('docker') {   
                sh 'mkdir /home/sysadmin/maincode|| echo "directory already exists" '
                sh '(cd /home/sysadmin/maincode/konaproject && git pull --all) || (cd /home/sysadmin/maincode/ && git clone https://github.com/sameeraja-ops/konaproject.git)'
                sh 'cd /home/sysadmin/maincode/konaproject/ && docker build -t sameeraja/frontend:${BUILD_ID} -t sameeraja/frontend:latest . '
                sh ' docker push sameeraja/frontend:${BUILD_ID} && docker push sameeraja/frontend:latest '  
            }
            }
            }
            }
            }
