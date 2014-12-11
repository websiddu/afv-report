---
layout: page
title: Report
permalink: /
---

<div class="toc">
<h3> Table of contents </h3>
<ol>
  <li><a href="#chapter-1"><span>Abstract</span></a></li>
  <li><a href="#chapter-2"><span>Introduction </span></a></li>
  <li><a href="#chapter-3"><span>Previous Work, Literature Review &amp; Inspirations</span></a></li>
  <li><a href="#chapter-4"><span>Design Process and Milestones</span></a>
    <ol>
      <li><a href="#chapter-4-sh1"><span> Proposal</span></a></li>
      <li><a href="#chapter-4-sh2"><span> Midterm Presentation</span></a></li>
      <li><a href="#chapter-4-sh3"><span> Interactive Visualization</span></a></li>
      </ol>
    </li>
  <li><a href="#chapter-5"><span>User Research </span></a>
    <ol>
      <li><a href="#chapter-5-sh1"><span> Quantitative Survey </span></a>
        <ol>
          <li><a href="#chapter-5-sh1-se1"><span> Survey Process</span></a></li>
          <li><a href="#chapter-5-sh1-se2"><span> Survey Results and Validation</span></a></li>
        </ol>
      </li>
      <li><a href="chapter-5.xhtml#chapter-5-sh4"><span> Usability Study </span></a>
        <ol>
          <li><a href="chapter-5.xhtml#chapter-5-sh5"><span> Usability Test Goal and Design</span></a></li>
          <li><a href="chapter-5.xhtml#chapter-5-sh6"><span> Usability Test Process </span></a></li>
          <li><a href="chapter-5.xhtml#chapter-5-sh7"><span> Usability Test Results Summary</span></a></li>
          <li><a href="chapter-5.xhtml#chapter-5-sh8"><span> Usability Test Issues List</span></a></li>
        </ol>
      </li>
    </ol>
  </li>
  <li><a href="chapter-6.xhtml"><span>Redesign</span></a></li>
  <li><a href="chapter-7.xhtml"><span>Discussion</span></a></li>
  <li><a href="chapter-8.xhtml"><span>Results</span></a></li>
  <li><a href="chapter-9.xhtml"><span>Further Work</span></a></li>
  <li><a href="chapter-10.xhtml"><span> References</span></a></li>
  <li><a href="chapter-11.xhtml"><span> Appendices </span></a>
    <ol>
      <li><a href="chapter-11.xhtml#chapter-11-sh1"><span> Appendix A: Links to demo and data</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh2"><span> Appendix B: User research survey</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh3"><span> Appendix C: Personas</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh4"><span> Appendix D: Usability test task script</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh5"><span> Appendix E: Development process</span></a></li>
    </ol>
  </li>
</ol>
</div>


<h3 id='chapter-1'> 1. Abstract </h3>
HCDE 511A presented an opportunity for Team Tesseract to produce a complex interactive visualization. Focusing on trends, makes, and the usage of Alternative Fuel Vehicles in the US, we utilized the UCD process to to create an underlying outline, proposal, and preliminary prototype with Tableau, all whilst incorporating best practices for visualization features. Conducting a user research survey, connecting our goals towards consumer needs, and desiring to have a highly interactive element focused our efforts on creating a multi-tab visualization crafted with D3. This paper will lay out out our design process, challenges, connectivity to the class, and discuss our final visualization which can be found here (http://afvs.me) .

_Categories and Subject Descriptors_<br>
HCDE 511A, Information Visualization<br>
H.5.2 [Information Interfaces and Presentation]: User<br>
Interfaces – Evaluation/methodology, User-centered design.<br>

_General Terms_<br>
Alternative Fuel Vehicles,  Measurement, Design, Experimentation, Human Factors.

_Keywords_<br>
AFV, Alternative Energy, environmentalism, conservation, hybrid, D3, Tableau, user research

<h3 id='chapter-2'> 2. Introduction </h3>
Global warming has been a topic of political and media coverage more and more frequently over the past few years. There is widespread concern that human activity has led to extremely high levels of greenhouse gases in the atmosphere, and that this situation will lead to more extreme weather patterns, polar ice cap melting, and other symptoms with potentially disastrous consequences. Additionally, the price of gasoline has increased dramatically over this same time frame. In 2007, the gasoline price was at its peak. We hypothesize that increased exposure to global warming concerns as well as a higher burden of transportation costs has been a boon for developers of alternative fuel vehicles (AFVs) and that these and other causes have led to increased prevalence of these vehicles over the past two decades.

For this project, we focused on the usage of AFVs in the United States. These vehicles, ranging from common gasoline-electric hybrids and ethanol-85 compatible vehicles to more obscure fuel sources such as compressed natural gas and hydrogen cell, have been increasing in popularity over the past two decades. To support the development of our interactive visualization, we found data sets from multiple sources including the US Department of Energy and the US Energy Information Administration. By combining these data sets, we were able to build a visualization that contains a very large amount of information and that displays this information in novel ways.

Viewing trends in AFV usage brings up many related questions, especially regarding carbon emissions from transportation sources over the same time frame. Although we needed to stay within a reasonable scope for this project, we felt that a limited amount of carbon emissions data would help to give our viewers a reference point and also to add a persuasive element to this visualization.

Our goal is to provide a tool for exploration of information regarding AFVs. Although this structure is open-ended and allows a user to choose their own path through the visualization, we organized our graphs into tabs that move from very broad to more detailed from left to right. This gives a small level of story line to the content and organizes it in a way that is highly understandable.

<h3 id='chapter-3'>3. Previous Work, Literature Review & Inspirations</h3>

As a part of the data discovery and cleaning phase, we explored existing research and presentation of related AFV and fuel sources data. Understanding the pre-existing work of others helped to refine our ideas and research questions, so that we would cover new ground and not simply confirm what already exists. As our data set stems from the Department of Energy and is widely available, there have been some visualizations already conducted with it, though most appear to be static.

The U.S. Energy Information Administration published an interactive visualization using the same data sets with which we began the study. This tool is fairly comprehensive, with graphs for yearly totals of vehicles and fuel consumed, consumption by fuel type, number and fuel consumed by vehicle type, number owned and fuel used by user group, and total vehicles and fuel consumed by state. The interactions support filtering, but nearly all of the graphs are presented as bar charts, with two choropleths provided for the state data. Even though this visualization uses much of the same data and presents similar comparisons, we feel that we have ample opportunity to improve upon the existing tools. A view of this visualization is shown below in Figure 1.



The US EIA provided the data set from the visualization discussed above for download, and it looked to be extremely useful to our needs. However, upon inspection, the data set was not complete and had many missing entries. We emailed the administrator and thankfully received back a complete data set. This provided us with several more years’ worth of data in a format that was already prepared for use in Tableau, so it was very easy to import, combine with our existing data set, and explore.

Figure 2 below illustrates on-road alternative fuel vehicles made available by year. It is an interactive stacked bar graph which users can either select or deselect the index provided on the right. This bar graph inspired us with an effective way to deliver our message. The initial impression on this graph made us think that this was a plain blue bar graph. However, deselecting the ethanol-85 (E85) index provided us with a different insight. We were able to see other fields clearly. In some of our data sets, there are data sets with one distinctive field. For instance, when we were exploring data sets for types of alternative fuels provided, E85 had an extremely high value compared to other fields. In this case, providing a static bar graph would not give users the ability to explore further and would keep key information essentially hidden. In this figure, by unchecking indexes, users can explore each index in depth.


<h3 id="chapter-4">4. Design Process and Milestones</h3>

<h4 id="chapter-4-sh1">4.1. Proposal</h4>
At the time of writing our proposal, we were still searching for additional data sets to supplement the Department of Energy’s Alternative Fuel Vehicle reports. Because of this, we were unsure exactly what information our final visualization would include, though a defined list of goals was being revised. Initial goals included ideas about the evolution of cars (especially in respect to fuel economy) over the past several decades, fuel prices, carbon emissions by fuel type and the reductions in greenhouse gas emissions by using alternative fuels. As there were lots of potentially viable data sets, keeping the scope small enough to be successful was a challenge. Other challenges included various formatting and missing data in many of the data sets, and the limited time and resources we had for this class. We attributed our intended goals primarily to a singular persona who was interested in AFV trends as a means of persuasion, though we expanded our goals when adding two additional personas.

Focusing on alternative fuel vehicles in the U.S., we planned early on in the project to utilize choropleths supplemented by other graph types to convey our ideas and demonstrate trends in our data. We hoped that following a “storyboard” type of workflow would also guide our users from the broad overview to more in-depth information, and then finally to a more consumer focused interaction where individuals might have an easier time making actionable choices about potential AFVs for which they have the highest interest. From early lectures about best practices of visualizations, we had a general concept of the types of principles of visual and interaction design we would be utilizing, such as bar vs. scatterplot usage, abilities to filter, select, and provide details-on-demand.

<h4 id="chapter-4-sh2">4.2. Midterm Presentation</h4>

For the midterm presentation, we had identified most of our data sets, but were still working on cleaning and compiling the data. However, we had enough data on general trends in the United States to present several variations of AFV focused graphs using Tableau. Our research questions still included some stretch goals that we would like to answer, but were possibly too much for the scope of the project.

We updated our defined target users and created more in-depth personas which are attached in Appendix C. Primarily, they are anyone who is interested in AFVs and has willingness to explore further information about them. Based on our personas, the visualization serves its role as an exploratory tool that provides useful information.

In addition to the data sets that we had found and compiled by this point, we also hoped to find data regarding the total number of vehicles in use by state and year, so that we could normalize our AFV data. Simply showing the number of AFVs in use by state is somewhat interesting, but only tells part of the story when population and/or total vehicles in the state are not also taken into consideration. What we wanted to deliver was a persuasive story that encouraged people to be aware about carbon emissions that come from vehicles and choose alternative options that are more eco-friendly.

We also still wanted to tie in some degree of greenhouse gas emissions into our visualization and at the time of the mid term presentation, we still had not found a suitable data set. Additionally, the midterm presentation provided us with a clear idea for further work. Feedback from classmates and Professor Aragon included useful aspects that we needed to consider, such as providing users percentage value which makes it much easier for them to make comparison between different values. One key piece of feedback was a request to enable comparing two or more states at once. This would help users explore the visualization further and gather useful information.

To demonstrate our progress for the midterm presentation, we created an initial visualization using Tableau. Though our data sets were limited, we still were able to create several visualizations to illustrate the point we were trying to deliver. These included the number of alternative fuel vehicles by state over the years 1994-2009, the statistical overview of fuel types offered in the market, and alternative fuel consumption by type.

<h4 id="chapter-4-sh3">4.3. Interactive Visualization</h4>
Based on feedback from our project proposal and midterm presentation, we reviewed our goals and project scope, and began to create our final visualization. We made a decision to use D3, since it provides more flexibility than Tableau. Based on our initial ideas that were sketched and prototyped using Tableau, we created the first interactive version with D3. During the development process from this point forward, we used Github to aid in our team’s communication. Github allowed us to post an issue, assign this issue to a specific member, and view the latest version of the visualization. Thanks to Github, we were able to manage tasks efficiently.

The first D3 version of our visualization had four tabs on the right hand side with the United States map on the left. The default map view showed the total number of alternative fuel vehicles with a  year selection tool on the bottom. When users hover over a particular state on the map, a popup shows specific details of that state. On the right side, the overview tab contained two graphs which illustrated annual carbon emissions from transportation sources and the total number of alternative fuel vehicles in use over the range of 1994 through 2011.

Because only one of our team members had the skill to use D3, the other three members explored the data and how to graph it using Tableau. Successful Tableau graphs were then re-created using D3. Although this helped to split the work between all members, one of the difficulties we had when creating visualizations with Tableau was insufficient data sets in the correct format. Additionally, the data format that was best for Tableau was not the most efficient for use by D3. We spent a large amount of time searching for data sets that would help us improve our visualization, and converting this data into formats that would be usable by Tableau and D3.


<h3 id="chapter-5">5. User Research </h3>

<h4 id="chapter-5-sh1">5.1. Quantitative Survey </h4>
In the early prototyping phase, before the midterm presentation, we sent out a survey to understand more about what types of information would be the most useful to our users, their understanding of the prototyped visual formats we had already created, and any missing information they might expect to see. An overarching goal of this early research was to validate our design goals, the value of the data, and to identify if our visualization concepts were usable. Complete survey results can be viewed in Appendix B.

<h4 id="chapter-5-sh1-se1">5.1.1. Survey Process </h4>

We used a combination of survey for quantitative attitudinal responses with a minor usability aspect via images and survey responses. Survey respondents indicated that they were interested in reducing pollution via alternative fuel, and to a slightly lesser degree, they were interested in reducing pollution via alternative fuel vehicles particularly.

<h4 id="chapter-5-sh1-se2">5.1.2 Survey Results and Validation </h4>

Of the total respondents, 43% indicated that they would be considering purchasing an AFV in the next five years, or already own one. When asked about a hypothetical vehicle purchase in the next five years, the most popular choice was a gasoline-electric hybrid, followed by gasoline, then a three-way tie between diesel, electric, and plug-in hybrid. In terms of considerations for purchasing a new vehicle, fuel economy was the most important according to our survey takers, followed by interior space and number of doors. Least important were the number of cylinders in the engine, and the popularity of the vehicle model. Finally, we included images of two digital and one paper prototype, and asked respondents to rate the clarity and value of each visualization. These images are displayed below in Figures 3-5. The digital images were rated much higher than the paper prototype, and in retrospect it would have been a better idea to separate these and not to present them in the same question.

![Figure 3]()
![Figure 4]()
![Figure 5]()


Although illuminating, these results are likely not indicative of the general population, as the survey was sent out over social media and therefore was limited by the social networks of the team. Additionally, while we asked users questions about their locations, history,  However, this feedback was very useful to help guide us into the direction we should focus our visualizations.


<h3 id="chapter-5-sh2">5.2. Usability Study</h3>
Once we had a complete prototype of our interactive visualization, we conducted a usability study to ensure that our graphs were understandable and useful, and that the interactions were intuitive for a new user.


<h4 id="chapter-5-sh2-se1">5.2.1. Usability Test Goal and Design </h4>

The goal of this standard usability test was to identify the ease of understanding and navigating our interactive prototype before we attempted to finalize the visualization. We attempted to identify major user issues and confusion, as well as missing components expected of users for a visualization targeting AFV information.


<h4 id="chapter-5-sh2-se2">5.2.2. Usability Test Process</h4>
Using a prototype version of our interactive visualization, we wrote a task list and conducted a usability test (the version of our prototype used for the test can be located here and the usability test script can be viewed in Appendix D). Each group member ran an individual participant, for a total of four participants, and these participants each completed a set of six tasks. Figure 6 below captures one of our participants in action.  Following standard usability procedures, the users were tasked initially to explore the visualization as naturally as possible as they would at home for an initial period of about 3 minutes, followed by directed tasks that targeted the specific state comparisons, year and emissions data, and most prominent AF type. Wrap up questions asked users about any missing data they’d expect to see, and the most memorable, frustrating, and confusing portions of the experience.







