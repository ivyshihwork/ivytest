const Experience = () => {
    return (
      <>
        <h3 className="exp-heading">Work Experience</h3>
        <div className="exp">
          <table class="job">
            <tr>
              <td class="job_title">Senior Site Reliability Engineer</td>
              <td class="company">Optimizely</td>
              <td class="date">01/05/2022 - 01/31/2023</td>
            </tr>
          </table>
          <br></br>
          <ul>
            <li>Backend support for Optimizely Digital Experimental Platform with Terraform, chef/knife, GitHub, auto (internal tool)</li>
            <li>Manage, support and troubleshoot Kafka data ingestion pipeline (zk, flume/logtier, elastic search, Kibana, GCP, AWS, k8s, Docker, Hadoop/HBase, Samza/Yarn, HUE, Cloudera Manager, etc)</li>
            <li>Monitor alerts through Slack, Datadog, Nagios, Grafana, Habor, and Sentry to troubleshoot and resolve issues.</li>
            <li>Helping managing other tools - Quay.io, Artifactory, CI/CD Tools (Jenkins, travisCI), etc.</li>
            <li>Writing documents for processes, and technical training documents as well as contributing procedural and technical documents.</li>
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>
        <div className="exp">
          <table class="job">
              <tr>
                <td class="job_title">Site Reliability Engineer</td>
                <td class="company">Apple</td>
                <td class="date">08/05/2021 - 01/05/2023</td>
              </tr>
            </table>
          <br></br>
          <ul>
            <li>Focal Point of Sale Engineering for Global Apple Retail store transactional software.</li>
            <li>Troubleshoot/diagnose any related reported incidents directly reported from the stores by going through logs in Splunk to reconstruct business flow to identify root cause and resolve, escalate to corresponding development / operation groups.</li>
            <li>Identify impact and provide SQL queries to update production data and help developers.</li>
            <li>Knowledge of Oracle database, SQL, Java programming language, networking, and cloud operations are essential.</li>
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">Release Engineer</td>
                  <td class="company">Sage Inttact</td>
                  <td class="date">10/08/2018 - 06/31/2019</td>
                </tr>
          </table>
          <br></br>
          <ul>
            <li>Automate release processes to eliminate manual work and possible issues.</li>
            <li>Deliver tools and features to core operations and development teams.</li>
            <li>Manage, monitor and maintain Jenkins, troubleshoot issues and provide fixes through SVN.</li>
            <li>Monitor QA job failures and provide analysis.</li>
            <li>Proactively identify and mitigate issues, come up with solutions and remove obstacles to complete projects.</li>
            <li>Communicate project plans and status. Escalate issues as required.</li>
            <li>Configure SumoLogic to provide out of the box reports and create customized reports to managements and presentations as well as using script automation to generate other reports, email/Slack alerts.</li>
            <li>Bi-weekly Salesforce packaging for QA to test and product management to deploy.</li>
            <li>Evaluate, test and analyze data from Memory Profiler Software for OS and JVM.</li>
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">Site Reliability Engineer</td>
                  <td class="company">Apple</td>
                  <td class="date">06/12/2017 - 10/01/2017</td>
                </tr>
          </table>
          <br></br>
          <ul>
            <li>Installed/Configured Extrahop ECA/EDA for network traffic monitoring.</li>
            <li>Wrote javascript to customize trigger and alert for ExtraHop reporting and pass data to Splunk.</li>
            <li>Created dashboards to monitor TCP/UDP/SSL/HTTP for Apple UAT/Production Applications using ExtraHop.</li>
            <li>Set up AppNeta for Apple global data centers (Asia, America,Europe) for network monitoring and troubleshoot connection issues.</li>
            <li>Used Site24x7 for third party external data center monitoring.</li>
            <li>Recorded and provided training videos for internal customers for ExtraHop.</li>
            <li>Wrote scripts in python/shell to generate reports and task automation and managed in GIT.</li>
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>        
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">Release Engineer</td>
                  <td class="company">Oracle</td>
                  <td class="date">06/01/2012 - 6/11/2017</td>
                </tr>
          </table>
          <br></br>
          <p>Worked as release engineer in Oracle Fusion Financial:</p>
          <ul>
            <li>Refresh/merge codeline branches and monitor build results.</li>
            <li>Create, maintain and manage Fusion Financial Development environments.</li> 
            <li>Review and approve/reject developer’s merge request for branch transactions.</li> 
            <li>Create, maintain manage, release Financial and FSCM Patch Bundle to customers</li> 
              <ul>
                <li>Create, document the process and train others</li>
                <li>Create and apply patch bundles to environments for testing.</li>
                <li>Create the script automations to generate reports for management and development to track.</li>
              </ul>
            <li>On rotation to support Oracle Fusion Central System Test and maintenance patching environments for Oracle Fusion Releases.</li> 
            <li>Web Admin for the team: Set up, configure and maintain the site.</li> 
            <li>Write scripts in perl/cgi/sql/expect/jython/python/shell to generate various reports for preemptive tracking, review and task automation.</li> 
            <li>Provide trainings for team and development on technical and procedural contents as necessary.</li>
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">Release Engineer</td>
                  <td class="company">Oracle</td>
                  <td class="date"> 06/01/2011 - 05/31/2012</td>
                </tr>
          </table>
          <br></br>
          <p>Worked as release engineer in Oracle Fusion Procurement:</p>
          <ul>
            <li>Refresh/merge codeline branches and monitor build results.</li>
            <li>Create, maintain and manage Fusion Procurement Development environments.</li> 
            <li>Performed release management responsibilities such as merge/refresh/clone family code branch, create/apply patches to family environments</li>
            <li>Assisted QAs to perform sanity check, QTP automation, QTP execution and monitoring using Quality Center.</li> 
            <li>On rotation to support Oracle Fusion Central System Test and maintenance patching environments for Oracle Fusion Releases.</li> 
            <li>Acted as backups for 2 ST lead on maintaining central system test environment duties for entire Fusion Applications.</li> 
          </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>   
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">Build Engineer</td>
                  <td class="company">PeopleSoft</td>
                  <td class="date"> 01/03/2010 - 05/31/2011</td>
                </tr>
          </table>
          <br></br>
          <ul>
            <li>Performed Database builds and Packaging for both Application and Tools releases.</li>
            <li>Provided production support/development for the BASS, EM HelpDesk and SRP systems..</li> 
            <li>Provided support for Ad-hoc requests (off-cycle tools upgrades, Pre-Validation testing, etc)</li>
            <li>Managed/maintained PeopleTools build servers</li> 
            <li>Change control support for ICE (Internal bug tracking system)</li>
            <li>Managed OwnerID changes for Application releases</li>
            <li>Worked closely with Environments teams (DBA’s, QAE) to provide support for build environments.</li>
            <li>Supported and performed Oracle Virtual Machine PeopleSoft template builds. Wrote BASH and SQL scripts to automate database build tasks.</li>
            </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>
        <div className="exp">
          <table class="job">
                <tr>
                  <td class="job_title">CRM QA Test Developer</td>
                  <td class="company">PeopleSoft</td>
                  <td class="date"> 12/03/2003 - 01/02/2010</td>
                </tr>
          </table>
          <br></br>
          <ul>
            <li>Tested Call Center applications, reporting, EIP, Assignment Engine, Workflow Notifications, Business Project, and Branch Script, etc.</li>
            <li>Automated test plans using QualityCenter/ TestDirector, WinRunner, QuickTest, and PSScript.</li>
            <li>Participated Development meetings, reviewed and provided feedback for functional, technical, and UI designs.</li>
            <li>Designed, automated and executed automated or manual tests and develop test plans for applications</li>
            <li>Logged and created bug reports using the PeopleTools incident tracking database.</li>
            <li> Worked with development on performance and misc. issues. Fixed bugs for developers as assigned.</li>
           </ul>
          {/* <a href="#">Live Demo</a> */}
        </div>  

      </>

    );
  };
  

export default Experience;