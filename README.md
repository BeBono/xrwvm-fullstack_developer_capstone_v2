# coding-project-template

***** 1/3 Start Theia Lab: ****

cd xrwvm-fullstack_developer_capstone_v2/server

pip install virtualenv
virtualenv djangoenv
source djangoenv/bin/activate

python3 -m pip install -U -r requirements.txt


(Before migrations:2/3 Run frontend with React: Not necessatily but it´s recommended)
python3 manage.py makemigrations

python3 manage.py migrate

python3 manage.py runserver



** 2/3 Run frontend with React
cd /home/project/xrwvm-fullstack_developer_capstone_v2/server/frontend
npm install  /run the following command to install all the neccesary dependencies.
npm run build    // Run the following command to build the client.

** 3/3 Re-create superuser:
python3 manage.py createsuperuser

** 4/ Populate de CarMake and CarModel (local database SQLite) 
"/get_cars"


****Run Database End-points:

cd /home/project/xrwvm-fullstack_developer_capstone_v2/server/database

**Start end-points / MondoDB:
1/2
Run the following command to build the Docker images
docker build . -t nodeapp

2/2 Run the following command to run the server:
docker-compose up

3/ Lunch on port 3030 / (Example)
https://albertocarb1-3030.theiadockernext-0-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/
https://albertocarb1-3030.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/

End-points:
/fetchDealers
/fetchDealers/:state
/fetchDealer/:id

/fetchReviews
/fetchReviews/dealer/:id

**Start sentiment analyzer (IBM Cloud Engine) as a microservice (port 5000):

cd xrwvm-fullstack_developer_capstone_v2/server/djangoapp/microservices
docker build . -t us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer
docker push us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer
ibmcloud ce application create --name sentianalyzer --image us.icr.io/${SN_ICR_NAMESPACE}/senti_analyzer --registry-secret icr-secret --port 5000
URL instance (example):
https://sentianalyzer.1hcuc1j7fh38.us-south.codeengine.appdomain.cloud
https://sentianalyzer.1iebwhj96cww.us-south.codeengine.appdomain.cloud