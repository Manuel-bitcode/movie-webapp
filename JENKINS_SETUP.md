# 🚀 Jenkins Setup Guide - Step by Step

## ✅ What's Already Done

- ✅ Tests are implemented and passing
- ✅ Jenkinsfile is configured with test stage
- ✅ Coverage reporting is set up
- ✅ JUnit XML output is configured
- ✅ Docker Compose configuration exists

## 📋 Step-by-Step Setup

### Step 1: Create Docker Network (if needed)

```bash
docker network create movie-network
```

### Step 2: Start Jenkins with Docker Compose

```bash
# Start only Jenkins (if you don't need the app container)
docker-compose up -d jenkins

# Or start everything
docker-compose up -d
```

### Step 3: Get Jenkins Initial Password

```bash
# Wait a few seconds for Jenkins to start, then:
docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword
```

**Copy the password** - you'll need it in the next step.

### Step 4: Access Jenkins Web UI

1. Open your browser: **http://localhost:8080**
2. Paste the initial password you copied
3. Click **"Continue"**

### Step 5: Install Suggested Plugins

1. Click **"Install suggested plugins"**
2. Wait for installation to complete (5-10 minutes)
3. Create your admin user:
   - **Username**: `admin` (or your choice)
   - **Password**: Choose a secure password
   - **Full name**: Your name
   - **Email**: Your email
4. Click **"Save and Finish"**

### Step 6: Configure Jenkins URL

1. Jenkins URL: `http://localhost:8080/`
2. Click **"Save and Finish"**

### Step 7: Install Required Plugins

Go to: **Manage Jenkins → Manage Plugins → Available**

Install these plugins (search and check each one):

- ✅ **HTML Publisher** (for coverage reports)
- ✅ **JUnit** (for test results - usually pre-installed)
- ✅ **Git** (if using Git - usually pre-installed)
- ✅ **Pipeline** (usually pre-installed)
- ✅ **NodeJS Plugin** (for Node.js support)

After selecting, click **"Install without restart"** and wait.

### Step 8: Configure Node.js in Jenkins

1. Go to: **Manage Jenkins → Global Tool Configuration**
2. Scroll to **"NodeJS"** section
3. Click **"Add NodeJS"**
4. Configure:
   - **Name**: `NodeJS-20`
   - **Version**: Select **"Install automatically"** and choose **NodeJS 20.x** from dropdown
   - **Global npm packages to install**: `npm@latest`
5. Click **"Save"**

### Step 9: Create Jenkins Pipeline Job

1. Click **"New Item"** on Jenkins dashboard
2. Enter name: `movie-webapp-pipeline`
3. Select **"Pipeline"**
4. Click **"OK"**

### Step 10: Configure Pipeline

In the pipeline configuration:

1. **Pipeline Definition**: Select **"Pipeline script from SCM"**
2. **SCM**: Select **"None"** (since we're using mounted volume)
3. **Script Path**: `Jenkinsfile`

**OR** (if you want to use the Jenkinsfile directly):

1. **Pipeline Definition**: Select **"Pipeline script"**
2. Copy the contents of your `Jenkinsfile` into the text area

**Alternative: Use Pipeline Script from SCM (if using Git)**

If your code is in Git:
1. **SCM**: Select **"Git"**
2. **Repository URL**: Your Git repository URL
3. **Credentials**: Add your Git credentials if needed
4. **Branch**: `*/main` or your branch
5. **Script Path**: `Jenkinsfile`

### Step 11: Adjust Jenkinsfile for Your Setup

Since your Jenkinsfile uses `/workspace/movie-webapp`, make sure the volume mount in docker-compose.yml matches. Your current setup should work, but verify the path.

### Step 12: Run the Pipeline

1. Go to your pipeline job
2. Click **"Build Now"**
3. Watch the build progress
4. Click on the build number to see logs
5. Check **"Test Result"** and **"Coverage Report"** links after build completes

## 🔍 Troubleshooting

### Problem: "Node.js not found"
**Solution**: Make sure NodeJS plugin is installed and configured in Global Tool Configuration

### Problem: "npm: command not found"
**Solution**: 
- Verify Node.js is installed in Jenkins container: `docker exec jenkins-server node --version`
- If missing, rebuild the container: `docker-compose build jenkins`

### Problem: "Permission denied" errors
**Solution**: 
```bash
docker exec -u root jenkins-server chown -R jenkins:jenkins /workspace/movie-webapp
```

### Problem: Tests fail in Jenkins but work locally
**Solution**: 
- Check that all dependencies are installed
- Verify the working directory path matches
- Check Jenkins logs for specific errors

### Problem: Coverage report not showing
**Solution**: 
- Verify HTML Publisher plugin is installed
- Check that `coverage/lcov-report/index.html` exists after tests run
- Verify the path in Jenkinsfile matches the actual coverage output

## 📊 Viewing Results

After a successful build:

1. **Test Results**: Click on build → **"Test Result"** link
2. **Coverage Report**: Click on build → **"Coverage Report"** link
3. **Console Output**: Click on build → **"Console Output"** to see all logs

## 🎯 Next Steps

1. **Set up Git integration** (if using Git):
   - Add GitHub credentials in Jenkins
   - Configure webhooks for automatic builds

2. **Schedule builds**:
   - In pipeline config → **"Build Triggers"** → **"Build periodically"**
   - Example: `H 2 * * *` (runs daily at 2 AM)

3. **Add notifications** (optional):
   - Install Email Extension plugin
   - Configure email notifications on build failure

## ✅ Verification Checklist

- [ ] Jenkins is running on http://localhost:8080
- [ ] All required plugins are installed
- [ ] Node.js is configured in Global Tool Configuration
- [ ] Pipeline job is created
- [ ] First build runs successfully
- [ ] Test results are visible
- [ ] Coverage report is accessible

---

**Need help?** Check the Jenkins logs:
```bash
docker logs jenkins-server
```

