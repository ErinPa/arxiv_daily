import urllib
import feedparser
from datetime import datetime
from random import randrange


def paper_picker(kw_title):
    # Base api query url
    base_url = 'http://export.arxiv.org/api/query?';

    # Search parameters
    search_query = urllib.parse.quote("ti:"+kw_title)
    i = 0
    batch_size = 1 #how many papers are processed in a batch
    papers = []
    difference = 0
    days = 7

    #search loop
    while (difference < days): #stop searching after a set amount of days
        print("Results %i - %i" % (i,i+batch_size))
        query = 'search_query=%s&start=%i&max_results=%i&sortBy=submittedDate&sortOrder=descending' % (
            search_query,
            i,
            batch_size)
        
        # GET request
        response = urllib.request.urlopen(base_url+query).read()

        # parse the response using feedparser
        feed = feedparser.parse(response)

        #extract relevant metadata from result
        for entry in feed.entries:
            paper = {}
            paper["date"] = entry.published 
            paper["title"] = entry.title
            auth_list=[]
            for j in range(0,len(entry['authors'])):
                auth_list.append(entry['authors'][j]['name'])
            paper["authors"] = auth_list
            paper["summary"] = entry.summary
            paper["href"] = entry.links[0]['href']
            papers.append(paper)
            #update last date
            t1 = datetime.strptime(datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ"), "%Y-%m-%dT%H:%M:%SZ")
            t2 = datetime.strptime(paper["date"], "%Y-%m-%dT%H:%M:%SZ")
            difference = (t1 - t2).days

        i += batch_size

        #get a random paper from the selection
        rnd_paper=papers[randrange(len(papers))]
        return rnd_paper
