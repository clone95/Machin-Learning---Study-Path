(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{395:function(e,t,a){"use strict";a.r(t);var o=a(44),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[e._v("#")]),e._v(" Index")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Recap-of-ML-systems"}},[e._v("Recap of ML systems")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Understand-the-data"}},[e._v("Understand the data")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Set-objectives-and-scope"}},[e._v("Set objectives and scope")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Conclusions"}},[e._v("Conclusions")])])]),e._v(" "),a("p",[e._v("Let's dive right in!")]),e._v(" "),a("h2",{attrs:{id:"recap-of-ml-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recap-of-ml-systems"}},[e._v("#")]),e._v(" Recap of ML systems")]),e._v(" "),a("p",[e._v("The process of Data Science, i.e. the extraction of knowledge and decisions from a set of data, is composed of several steps. Simplifying as much as possible, we try to frame the problem we want to solve, then we study the data available, then we create models (Machine Learning models) that are used to make predictions or estimates.")]),e._v(" "),a("p",[e._v("The definition of the problem is the first phase and also guides all the choices of design, implementation, and integration that will come later during the project.")]),e._v(" "),a("p",[e._v("In particular, it is fundamental to classify the type of forecast you want to obtain once you have built the Machine Learning models: what "),a("em",[e._v("kind of prediction")]),e._v(" should the system make?\nShould it predict a number or a label?\nOr will it have to group new data with those most similar to it?\nOr should he predict the next content to be recommended to a user?")]),e._v(" "),a("p",[e._v("As we saw in the guide "),a("RouterLink",{attrs:{to:"/paradiso/introduction-to-ml.html"}},[e._v("Introduction to ML systems")]),e._v(", there are various ways to classify a problem related to data and learning from them, and in particular, the most important classification to frame the problem is as follows: "),a("strong",[e._v("is the problem a supervised or unsupervised learning task?")])],1),e._v(" "),a("p",[e._v('A supervised problem is a problem in which the data we want to learn from are "labeled": for example, images labeled according to their content, or the data of a loan applicant who knows how many times he managed to repay the debt or not.')]),e._v(" "),a("p",[e._v('By "showing" a Machine Learning algorithm so many examples, we hope that it will be able to generalize to new cases never seen before and predict the right label (not necessarily a specific class, it could even be a number).')]),e._v(" "),a("p",[e._v('An unsupervised problem is without these labels, and our "learning from data" is usually about finding similarities between the various elements of the dataset and grouping them (clustering and other unsupervised learning techniques).')]),e._v(" "),a("p",[e._v('The type of problem we will focus on in the Purgatory guides is the "supervised" type, which are the most common problems and those faced by neural networks (very powerful and flexible Machine Learning algorithms).')]),e._v(" "),a("p",[e._v("We will see in the "),a("RouterLink",{attrs:{to:"/purgatorio/select-and-train-machine-learning-models/machine-learning-theory.html"}},[e._v("Machine Learning Theory")]),e._v(" guide also some methods to deal with unsupervised problems.")],1),e._v(" "),a("p",[e._v("After this summary, let's see what questions we ask ourselves (and which we ask the experts of the domain) to frame a data problem.")]),e._v(" "),a("p",[e._v("The first thing to do when dealing with a new problem is to understand what kind of data I have available. Remember, without data you're not going anywhere!")]),e._v(" "),a("h2",{attrs:{id:"understand-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understand-the-data"}},[e._v("#")]),e._v(" Understand the data")]),e._v(" "),a("p",[e._v("The first thing to do, whether you are carrying out a project of corporate scope or for yourself, is to understand what kind of data you have available: the process then requires you to start from the data to formulate a problem, not the other way around!")]),e._v(" "),a("p",[e._v("As widely explained in Paradise, good-quality data is the only thing really necessary for quality of the Machine Learning system you want to train.")]),e._v(" "),a("p",[e._v("When we look at the data we should ask ourselves the following questions:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("What are we supposed to do this with this data?")])]),e._v(" "),a("p",[e._v("This may sound like a stupid question, but we shouldn't assume that our aim is to cover the whole process of Data Science, from data collection to the creation of predictive models of Machine Learning.\nMaybe what we have to do is just a sub-stage of the ones that make up the complete process. For example, we may just have to clean up the data and format it well, or analyze it and report back to other considerations about it.\nOr we might just have to do some statistics on them to observe six phenomena, so avoid the part of creating the model. Nobody wants to waste time doing things that are not necessary!")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("What form do the data take?")])]),e._v(" "),a("p",[e._v("The data we have at our disposal can be of a completely different type:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("tabular data:")]),e._v('\nAs the name indicates, data extracted from database tables (not necessarily relational). They are data organized in rows, have attributes, and generally a way to identify them uniquely. The rows are divided into fields, which in turn can contain various types of data (numeric, textual, links to images). This type of data is also called "structured".\nFor example, I could have a database that collects user names, their ages, and associated tweets, in which case I would have tabular data that includes both text data (names and tweets) and numerical data (age).')])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("text:")]),e._v("\nFor example, application logs, tweets, textbooks. We can consider textual data all that is made up of characters. Text data can then be inserted in the context of tabular data, as a separate field.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("categorical:")]),e._v('\nCategorical data is a subset of textual data: it does not contain information about the language, as a tweet could do, and often it is not even a sentence. For example, they could be "Red" or "Expired" and are considered '),a("em",[e._v("labels")]),e._v(" rather than text data.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("numerical:")]),e._v("\nNumerical data is any type of data "),a("a",{attrs:{href:"https://www.pythonforbeginners.com/code/numeric-types-python",target:"_blank",rel:"noopener noreferrer"}},[e._v("calculated from a computer"),a("OutboundLink")],1),e._v(": Integers, floats, doubles, etc.\nThey can be continuous (e.g. temperature in degrees) or discrete (evaluation of a product). In the first case, the accuracy of the data measurement determines the type of numerical data used (usually float).")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("audio:")]),e._v("\nAudio files can be of "),a("a",{attrs:{href:"https://www.makeuseof.com/tag/audio-file-format-right-needs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("various formats"),a("OutboundLink")],1),e._v(", which greatly influence the resolution (and therefore the amount of information they contain). They can be phone recorded conversations, for example, customer care, or environmental sounds, or even animal sounds.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("images:")]),e._v("\nImages can be presented in "),a("a",{attrs:{href:"https://www.google.com/search?q=images+format&oq=images+format&aqs=chrome..69i57j0l5.1643j1j7&sourceid=chrome&ie=UTF-8",target:"_blank",rel:"noopener noreferrer"}},[e._v("various formats"),a("OutboundLink")],1),e._v(", which affect the maximum resolution and number of colors of the image (RGB or B&W). Images have the characteristic of being very rich in information, so often there is the problem of storage, and reading/writing them on disk can be a costly operation.\nImage data often has the advantage that with some scraping trick (downloading data from the Internet) you can enlarge the datasets and thus improve the performance of Machine Learning models.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("videos:")]),e._v("\nVideos can be classified into two types: streaming (in real-time) and recorded (saved on disk).\nVideos are a fairly complex format to handle and extremely heavy from a storage point of view, so it is recommended not to start from this type of data if you are a beginner.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("time series:")]),e._v("\nTime-series is a collection of data about events in time.\nThis kind of data consists of historical series, such as the series of surveys of a sensor, or the history of the interactions of a social user. This type of data is useful to predict future behavior based on previous observations, such as predict whether a machine is about to break or if a user will buy a certain product.\nTime series have the concept of granularity, which is the amount of time between measurements:\nfor example, we can have daily or annual data, or even a new example recorded every microsecond.")])])])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Do we know the data is raw or unclean?")])])])]),e._v(" "),a("p",[e._v("By "),a("em",[e._v("raw")]),e._v(" we mean the data as we come into possession of it. These can be clean and well-structured, or dirty and to be cleaned.")]),e._v(" "),a("p",[e._v("In general, real-world data is hardly ever clean and tidy.")]),e._v(" "),a("p",[e._v("There may be a lack of values, they may be unstructured, they may be superficially collected! They may be of low quality (e.g. an audio file with noise) or have useless information. So generally you always have to think about the raw form in which we have the data, and what cleaning steps will be needed to make it usable by Machine Learning models. This phase (called data cleaning or data preprocessing) is vital during the Data Science process, and is often spent like this "),a("a",{attrs:{href:"https://www.reddit.com/r/datascience/comments/bupmyf/data_scientists_spend_up_to_80_of_time_on_data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("80 percent of a Data Scientist's time"),a("OutboundLink")],1),e._v('. In the Purgatorio section "Work with data" there is an entire guide dedicated to data cleaning.')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Are the data labeled or not?")])])]),e._v(" "),a("p",[e._v("From this StackOverflow "),a("a",{attrs:{href:"https://stackoverflow.com/questions/19170603/what-is-the-difference-between-labeled-and-unlabeled-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("thread"),a("OutboundLink")],1),e._v(":")]),e._v(" "),a("p",[e._v('Typically, unlabeled data consists of samples of natural or human-created artifacts that you can obtain relatively easily from the world. Some examples of unlabeled data might include photos, audio recordings, videos, news articles, tweets, x-rays (if you were working on a medical application), etc. There is no "explanation" for each piece of unlabeled data -- it just contains the data, and nothing else.')]),e._v(" "),a("p",[e._v('Labeled data typically takes a set of unlabeled data and augments each piece of that unlabeled data with some sort of meaningful "tag," "label," or "class" that is somehow informative or desirable to know. For example, labels for the above types of unlabeled data might be whether this photo contains a horse or a cow, which words were uttered in this audio recording, what type of action is being performed in this video, what the topic of this news article is, what the overall sentiment of this tweet is, whether the dot in this x-ray is a tumor, etc.')]),e._v(" "),a("p",[e._v('Making Machine Learning models that learn from labeled data means formulating a "supervised" problem, while with unlabeled data the problem is called an "unsupervised" problem.')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("If they aren't labeled, is it possible to label them?")])])]),e._v(" "),a("p",[e._v('The most powerful results of ML applications (vision, language understanding) require huge amounts of labeled data, and that the labeling issue is known as the biggest bottleneck of modern ML applications. How long does it take to manually classify 100,000 documents, even if you just have to choose between "Type A" and "Type B"?\nLabeling is a tiring and often tedious job, and it takes a lot of time to be done well.')]),e._v(" "),a("p",[e._v("Services like AWS "),a("a",{attrs:{href:"https://www.mturk.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Mechanical Turk"),a("OutboundLink")],1),e._v(" or the Google "),a("a",{attrs:{href:"https://cloud.google.com/data-labeling/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AI Platform Data Labeling Service"),a("OutboundLink")],1),e._v(" (like many other tech vendors) provide distributed groups of workers with instructions on how to label a dataset.")]),e._v(" "),a("p",[e._v("There are also free tools ("),a("a",{attrs:{href:"https://recogito.github.io/annotorious/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Annotorius"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"http://labelme.csail.mit.edu/Release3.0/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LabelMe"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://labelbox.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LabelBox"),a("OutboundLink")],1),e._v(") that allow you to label yourself or work with a team. It's time to call your little brother and promise him 1 cookie for every 10 tagged examples.")]),e._v(" "),a("p",[e._v("Often labeling a dataset is a complex and expensive issue, and its qualitative success is crucial to the success of the project.")]),e._v(" "),a("p",[e._v("In this "),a("a",{attrs:{href:"https://www.kdnuggets.com/2017/06/acquiring-quality-labeled-training-data.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("article"),a("OutboundLink")],1),e._v("\nyou can find 7 additional ideas to lower the cost of your labeling efforts.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("How reliable are the labels?")])])]),e._v(" "),a("p",[e._v("To obtain high-performance Machine Learning systems it is clear that large amounts of data are needed. However, it is equally important that "),a("strong",[e._v("the data is correct")]),e._v(", especially in supervised learning applications. Even if you have a lot of examples in your dataset, you could do very little to get acceptable performance from the ML models trained on them, if the data quality is low.")]),e._v(" "),a("p",[e._v("The intrinsic noise of the dataset "),a("em",[e._v("is impossible to eliminate")]),e._v(" and will affect both the training phase of the model and in the phase of predictions of new examples as well.")]),e._v(" "),a("p",[a("em",[e._v("Entrusting labeling to working groups distributed through the services of large tech vendors requires that the labeling task must be simple.")])]),e._v(" "),a("p",[e._v("It is rather simple to distinguish between categories of clearly visible animals or the colors of a dress or simple sounds (if clear labeling instructions are provided), it is very difficult to distinguish for example various different species of birds, or the words of a specific language (for someone who doesn't know the language).")]),e._v(" "),a("p",[e._v('Some labeling tasks are simply not obtainable through "crowd-labeling", such as diagnosing medical images or classifying complex documents, which require a deep knowledge of the domain, and a lot of practical experience.')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Is it possible to put the data altogether?")])])]),e._v(" "),a("p",[e._v('Often the data sources from which the data comes are heterogeneous and fragmented: a company often divides its data into "silos", making a silo for each business process. Or in general, we may have to merge several datasets and figure out how to do it.\nDoes this lead to the question: do the data have the same format? Do they refer to the same period or to different times? Have they been collected in the same way?')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Is this sensitive data?")])])]),e._v(" "),a("p",[e._v("Often the public datasets that are used for ML applications do not contain sensitive data (such as identity, medical records, crimes), but sometimes when we work with real-world data they carry with them sensitive information, and we have to worry about managing it. Unless you need to develop an ML application to customize your user experience (and therefore personal data is critical), you can generally delete it without too much trouble.")]),e._v(" "),a("p",[e._v('For example, you can "make anonymous" a dataset of medical records (or X-ray images) by deleting the names and details of patients.')]),e._v(" "),a("p",[e._v("If I want to train a bone fracture classifier, I don't need to know who the skeleton in question belongs to! (Or rather, it could be useful and additional information, but it is not essential).")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Can we achieve our goal with this data after cleaning and processing it?")])])]),e._v(" "),a("p",[e._v('This question is very general and difficult to answer, especially for a novice! But we must try to imagine: after having cleaned and prepared the data, will their final form be "learned" by an algorithm? To learn how to answer this question, the only solution is to gain experience.')]),e._v(" "),a("p",[e._v("So it means that it will happen many times that maybe we work on the data and clean it, and then we realize that there are no satisfactory methods to learn from them and get acceptable results.")]),e._v(" "),a("p",[e._v("But don't despair! Every time you make this kind of \"mistake\" (inability to assess a-priori the feasibility of an ML application) you learn a lot, and soon you'll be able to assess in advance if your efforts will be well rewarded, before spending whole nights labeling examples!")]),e._v(" "),a("ul",[a("li",[a("strong",[a("em",[e._v("How much")]),e._v(" data is there (number of examples, storage requirements)?")])])]),e._v(" "),a("p",[e._v("The more data you have, the better. How many times have we already repeated it?\nKnowing how much data you have available is crucial, and understanding how much data you need (about) to make an ML algorithm learn satisfactorily is even more important. Often the examples have to be in the tens of thousands range to get enough satisfying results, but the state of the art can usually only be achieved with hundreds of thousands of examples.")]),e._v(" "),a("p",[e._v('This number, however, is very empirical, strongly depends on the complexity of the task, and can be reduced through the use of Transfer Learning (which uses pre-trained models and "adjusts" them slightly).')]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Can we augment the dataset?")])])]),e._v(" "),a("p",[e._v('There are many ways to get more data than you have. We will see in the next technical guides both of data collection (scraping, search engines) and techniques of "data augmentation" that allow increasing the size of the dataset. For example, suppose we have a dataset of 10,000 images of fruit. We could add the images themselves but slightly transformed, with small rotations, cuts, or fields of contrast and brightness.')]),e._v(" "),a("p",[e._v('Adding completely new data generally helps the algorithm to generalize better with data it has never seen, while doing "data augmentation" generally increases the robustness of the system (it tends to be less wrong because of distortions or low quality of the example it is examining).')]),e._v(" "),a("p",[e._v("If we answer these questions, we should have a clear picture of what data we have available.")]),e._v(" "),a("p",[e._v("We can now proceed to the definition of the problem.")]),e._v(" "),a("h2",{attrs:{id:"set-objectives-and-scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-objectives-and-scope"}},[e._v("#")]),e._v(" Set objectives and scope")]),e._v(" "),a("p",[e._v("Like any other software project, a data science project needs to have a clear goal to reach.")]),e._v(" "),a("p",[e._v("Formulating this objective is crucial for various reasons:")]),e._v(" "),a("ul",[a("li",[e._v("the success of the project")]),e._v(" "),a("li",[e._v("the measurability of the success of the project")]),e._v(" "),a("li",[e._v("setting a clear target does not create too high an expectation")])]),e._v(" "),a("p",[e._v("I suggest that you use the SMART methodology for projects, which consists of formulating them in a way:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("S")]),e._v("pecific")]),e._v(" "),a("li",[a("strong",[e._v("M")]),e._v("easurable")]),e._v(" "),a("li",[a("strong",[e._v("A")]),e._v("ttainable")]),e._v(" "),a("li",[a("strong",[e._v("R")]),e._v("elevant")]),e._v(" "),a("li",[a("strong",[e._v("T")]),e._v("ime-framed")])]),e._v(" "),a("p",[e._v("In particular, defining the scope of the project is fundamental. The scope is the size of the project, the number of components of which it is composed.")]),e._v(" "),a("p",[e._v("Projects often fail because you don't have a clear scope and you continue to add more components until you have lost sight of the initial goal.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("ul",[a("li",[e._v('"I want to build a user interface that understands the natural language and interacts with the user" is too generic.')]),e._v(" "),a("li",[e._v('"I want to build a user interface that can take orders from the pizzeria and organize them according to the arrival time" is a much more defined scope.')])]),e._v(" "),a("p",[e._v("Another example:")]),e._v(" "),a("ul",[a("li",[e._v('"This system must help us classify all the new data that arrives"\nis too generic.')]),e._v(" "),a("li",[e._v('"This system must classify the images that users send us according to the color of the object photographed" is specific.')])]),e._v(" "),a("p",[e._v('Trying to formulate the problem in a "SMART" way helps you not to lose sight of the objective, not to set yourself unattainable objectives, to reach them in time and above all to realize if you are working well or badly (measurability). We will see in the next guide "Choose the metrics" how this aspect is fundamental.')]),e._v(" "),a("p",[e._v("Highly recommended reading the "),a("a",{attrs:{href:"https://community.mis.temple.edu/mis0855002fall2015/files/2015/10/S.M.A.R.T-Way-Management-Review.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("original paper"),a("OutboundLink")],1),e._v(" of the SMART projects.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/machine-learning/problem-framing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("This mini-course from "),a("strong",[e._v("Google")]),a("OutboundLink")],1),e._v(" will help you frame your problem. Do it.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=Jn8c3oe_GWU",target:"_blank",rel:"noopener noreferrer"}},[e._v("This"),a("OutboundLink")],1),e._v(" is a very good example of framing an NLP (Natural Language Processing) project. Take a look at the entire Kaggle youtube channel, there's a lot of learning material!")]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"conclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),a("p",[e._v("In general, it is extremely useful to produce a document summarising all the answers to the questions, so as to provide a clear view of the project as a whole, what are the final objectives, and the most important characteristics for the system.")]),e._v(" "),a("p",[e._v("This list is not exhaustive, and as you get a question in your head you feel free to pull a request to this file.")]),e._v(" "),a("p",[e._v("A Virgilio member will take over your request and enrich this guide with your contribution.")]),e._v(" "),a("p",[e._v("In the next guide "),a("RouterLink",{attrs:{to:"/purgatorio/define-the-scope-and-ask-questions/usage-and-integration.html"}},[e._v("usage and integration")]),e._v(" we will see other key questions we have to think about, like the usage of the system, its integration, and more!")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);