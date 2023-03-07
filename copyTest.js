let url = `http://apis.fretron.com/print-manager/print/generate-pdf`
        var options = {
            method: 'POST',
            uri: url,
            headers: {
                'Content-Type': 'text/html',
                'Authorization': 'Bearer ' + req.tokenInfo.token
            },
            body: file
        };
        rq(options).pipe(res)



        