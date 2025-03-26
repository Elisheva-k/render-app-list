const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
app.get('', (req, res) => {
    res.send('Hello World');
});

// Endpoint ל-GET שמחזיר את רשימת האפליקציות
app.get('/apps', (req, res) => {
    const apps = [
        {
            "cursor": "7TEM4EdoJXh0aWQybmcxczczZDZ2OTQw",
            "service": {
                "autoDeploy": "yes",
                "branch": "main",
                "createdAt": "2025-03-22T20:34:17.817896Z",
                "dashboardUrl": "https://dashboard.render.com/web/srv-cvfhtid2ng1s73d6v940",
                "id": "srv-cvfhtid2ng1s73d6v940",
                "name": "todos-server",
                "notifyOnFail": "default",
                "ownerId": "tea-cvcbqg3tq21c739t92i0",
                "repo": "https://github.com/Elisheva-k/todos.server",
                "rootDir": "",
                "serviceDetails": {
                    "buildPlan": "starter",
                    "env": "docker",
                    "envSpecificDetails": {
                        "dockerCommand": "",
                        "dockerContext": ".",
                        "dockerfilePath": "./Dockerfile"
                    },
                    "healthCheckPath": "",
                    "maintenanceMode": {
                        "enabled": false,
                        "uri": ""
                    },
                    "numInstances": 1,
                    "openPorts": null,
                    "plan": "free",
                    "previews": {
                        "generation": "off"
                    },
                    "pullRequestPreviewsEnabled": "no",
                    "region": "oregon",
                    "runtime": "docker",
                    "sshAddress": "srv-cvfhtid2ng1s73d6v940@ssh.oregon.render.com",
                    "url": "https://todos-server-o3ko.onrender.com"
                },
                "slug": "todos-server-o3ko",
                "suspended": "not_suspended",
                "suspenders": [],
                "type": "web_service",
                "updatedAt": "2025-03-22T21:51:40.820609Z"
            }
        },
        {
            "cursor": "87D4L3Hu7nNldmJxZjB1czczY21wN2dn",
            "service": {
                "autoDeploy": "yes",
                "branch": "main",
                "createdAt": "2025-03-19T14:41:01.97548Z",
                "dashboardUrl": "https://dashboard.render.com/static/srv-cvddevbqf0us73cmp7gg",
                "id": "srv-cvddevbqf0us73cmp7gg",
                "name": "Todos",
                "notifyOnFail": "default",
                "ownerId": "tea-cvcbqg3tq21c739t92i0",
                "repo": "https://github.com/Elisheva-k/todos.client",
                "rootDir": "",
                "serviceDetails": {
                    "buildCommand": "npm run build",
                    "buildPlan": "starter",
                    "previews": {
                        "generation": "off"
                    },
                    "publishPath": "build",
                    "pullRequestPreviewsEnabled": "no",
                    "url": "https://todos-prlr.onrender.com"
                },
                "slug": "todos-prlr",
                "suspended": "not_suspended",
                "suspenders": [],
                "type": "static_site",
                "updatedAt": "2025-03-22T21:56:19.88845Z"
            }
        }
    ];
    res.json(apps);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/apps`);
});
