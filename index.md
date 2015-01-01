---
layout: page
title: Report
permalink: /
---


 ---- Work in progress ----

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
      <li><a href="chapter-5-sh2"><span> Usability Study </span></a>
        <ol>
          <li><a href="#chapter-5-sh2-se1"><span> Usability Test Goal and Design</span></a></li>
          <li><a href="#chapter-5-sh2-se2"><span> Usability Test Process </span></a></li>
          <li><a href="#chapter-5-sh2-se3"><span> Usability Test Results Summary</span></a></li>
          <li><a href="#chapter-5-sh2-se4"><span> Usability Test Issues List</span></a></li>
        </ol>
      </li>
    </ol>
  </li>
  <li><a href="#chapter-6"><span>Redesign</span></a></li>
  <li><a href="#chapter-7"><span>Discussion</span></a></li>
  <li><a href="#chapter-8"><span>Results</span></a></li>
  <li><a href="#chapter-9"><span>Further Work</span></a></li>
  <li><a href="#chapter-10"><span> References</span></a></li>
  <li><a href="#chapter-11"><span> Appendices </span></a>
    <ol>
      <li><a href="#chapter-11-sh1"><span> Appendix A: Links to demo and data</span></a></li>
      <li><a href="#chapter-11-sh2"><span> Appendix B: User research survey</span></a></li>
      <li><a href="#chapter-11-sh3"><span> Appendix C: Personas</span></a></li>
      <li><a href="#chapter-11-sh4"><span> Appendix D: Usability test task script</span></a></li>
      <li><a href="#chapter-11-sh5"><span> Appendix E: Development process</span></a></li>
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

<h5 id="chapter-5-sh1-se1">5.1.1. Survey Process </h5>

We used a combination of survey for quantitative attitudinal responses with a minor usability aspect via images and survey responses. Survey respondents indicated that they were interested in reducing pollution via alternative fuel, and to a slightly lesser degree, they were interested in reducing pollution via alternative fuel vehicles particularly.

<h5 id="chapter-5-sh1-se2">5.1.2 Survey Results and Validation </h5>

Of the total respondents, 43% indicated that they would be considering purchasing an AFV in the next five years, or already own one. When asked about a hypothetical vehicle purchase in the next five years, the most popular choice was a gasoline-electric hybrid, followed by gasoline, then a three-way tie between diesel, electric, and plug-in hybrid. In terms of considerations for purchasing a new vehicle, fuel economy was the most important according to our survey takers, followed by interior space and number of doors. Least important were the number of cylinders in the engine, and the popularity of the vehicle model. Finally, we included images of two digital and one paper prototype, and asked respondents to rate the clarity and value of each visualization. These images are displayed below in Figures 3-5. The digital images were rated much higher than the paper prototype, and in retrospect it would have been a better idea to separate these and not to present them in the same question.

![Figure 3]()
![Figure 4]()
![Figure 5]()


Although illuminating, these results are likely not indicative of the general population, as the survey was sent out over social media and therefore was limited by the social networks of the team. Additionally, while we asked users questions about their locations, history,  However, this feedback was very useful to help guide us into the direction we should focus our visualizations.


<h3 id="chapter-5-sh2">5.2. Usability Study</h3>
Once we had a complete prototype of our interactive visualization, we conducted a usability study to ensure that our graphs were understandable and useful, and that the interactions were intuitive for a new user.


<h4 id="chapter-5-sh2-se1">5.2.1. Usability Test Goal and Design </h4>

The goal of this standard usability test was to identify the ease of understanding and navigating our interactive prototype before we attempted to finalize the visualization. We attempted to identify major user issues and confusion, as well as missing components expected of users for a visualization targeting AFV information.


<h5 id="chapter-5-sh2-se2">5.2.2. Usability Test Process</h5>
Using a prototype version of our interactive visualization, we wrote a task list and conducted a usability test (the version of our prototype used for the test can be located here and the usability test script can be viewed in Appendix D). Each group member ran an individual participant, for a total of four participants, and these participants each completed a set of six tasks. Figure 6 below captures one of our participants in action.  Following standard usability procedures, the users were tasked initially to explore the visualization as naturally as possible as they would at home for an initial period of about 3 minutes, followed by directed tasks that targeted the specific state comparisons, year and emissions data, and most prominent AF type. Wrap up questions asked users about any missing data they’d expect to see, and the most memorable, frustrating, and confusing portions of the experience.


<h5 id="chapter-5-sh2-se3">5.2.3. Usability Test Results Summary</h5>
Overall the participants had a high success rate, and we got positive feedback about the effectiveness of the choropleth and the ease of use of the tab controls. Our participants were also surprised at the amount of information that was available and became highly engaged while exploring the visualization. Most users were surprised at the fidelity of the prototype, which may confound our results as the polish of the interactivity may skew users’ perceptions regarding the understandability of the data.


<h5 id="chapter-5-sh2-se4">5.2.3. Usability Test Issues List</h5>
We divided the feedback into major and minor issues, and into the categories of Data, Clarity, and Functionality. These issues are detailed below:


Highlights

- Tabbed exploration was effective for most participants.
- Most participants were surprised by the abundant amount of information.

Major issues

Data

- Participants weren’t sure how AFV’s compared against total car numbers within states. <br> _Fix = added a choropleth that displayed the ratio of gasoline vehicles to alternative fuel vehicles._
Several participants expected to see regular gasoline information.  <br> _Fix = Added gasoline data._
- Participants wanted to compare graphs on the overview page. <br> _Fix = combined both graphs on first page. We also built a tool to add up to four states to compare at once on this combined graph. _

Clarity

- Participants were confused by acronym usage. <br> _Fix = Wrote all acronyms out where possible, and added a definition below the plot when this was not possible._
- Participants noticed legend and data point shapes didn’t always match. <br>_Fix = This was a default state of D3 that presented challenges in fixing, but would be a priority item in future work._

Functionality

Several participants found it difficult to undo a change, ctrl-Z, or go back a step. Fix = Unfortunately a back-one-step button could not be implemented in the time we had.



Minor issues

Functionality

- Some participants found the choropleth zoom was too sensitive.  <br> _Fix = Reduced zoom sensitivity._
- Some participants were confused by the function of our selectable legends because they had unclear radio vs. checkbox functions.  <br> _Fix = This is a default D3 state that would be a high priority item for future work. Giving the two different control types a different visual style, for example circles and squares as is common practice, would make this more usable._

Clarity

- Some participants noted popups of hover-text were confusing, from missing units or occlusion of background info. <br> _ Fix = Added units, and found a workaround for the occlusion._
- Some Participants thought the animation (a slideshow that transitioned through the years 1994 to 2011) wasn’t very helpful. <br> _Fix = Removed animation._
- Some participants had a hard time reading variations in the purple choropleth shading.  <br> _Fix = Adjusted the deepness of the purple to give more visual range_


<h3 id="chapter-6">6. Redesign</h3>

As outlined above, we discovered several major and minor issues during our usability test. While not all of the issues could be fully addressed, we still attempted to improve the experience as much as possible.

The choropleth proved to be highly understandable by all participants, but many pointed out that the data would be more useful when shown as a comparison, especially for the percentage of AFVs to total vehicles in each state. We had already included this data in the details view popup, so it was easy to add another choice to the drop down menu which allowed it to be displayed on the map itself.

On the overview tab, it was suggested that we combine the two graphs into one, which allowed for easier comparison between trends in number of AFVs and the carbon emissions from transportation sources for each state. This led to the addition of a tool to compare up to four states at once. We limited the comparison to four to reduce the change of occlusion, and to maintain readability of the legend colors. Thus, with more number of data sets, the rest of the tabs were created.


<h3 id="chapter-7">7. Discussion</h3>

Throughout this entire project, we followed Shneiderman’s mantra of “overview first, zoom and filter, then details on demand.” We also followed Tufte’s principles of graphical excellence and integrity. In particular, we aimed to make a large data set coherent, and to reveal many levels within this data set, allow our users to think more deeply about the subject, and to avoid any distortion in the data. We aimed to show the data in the most efficient and easily understood ways possible. Each screen is discussed in detail below, in Figures 7-12.

![Figure 7: Choropleth view](http://assets.websiddu.com/reports/afv/fig1.png)

A: Showcases the overview of the graph and the zooming abilities of the visualization. The left side of the screen is consistent across all tabs as an overview, while the right side is contextual based on the selection of the top-right blue headers.

B: This drop-down menu provides a tool for display options of the choropleth as shown below.

![Figure1](http://assets.websiddu.com/reports/afv/fig2.png)

C: Illustrates the hover-text of details on demand of each state. One minor issue that we were unable to resolve is that this hover-box is occluded by the drop-down menu at the top left. The work around is to drag the choropleth position so that the popup menu is no longer near the edge of the window.

Because we had geographical data, displaying it as a choropleth made the most sense, and we got a lot of positive feedback about this in the usability tests. We kept this choropleth accessible at all times on the left side of the visualization. Many of the graphs in the right-hand side tabs are linked to individual state selection by the choropleth, so we wished to make that apparent and easy to control. This linking between graphs conveniently filters multiple data sets together. By selecting a single state we also support drilling down, from the US-wide data aggregation to a single state. The map view utilizes focus & context to some extent, and also supports panning and zooming. There is an animation in the zoom transition to make it easier to follow, as suggested by Few (2009).

An autoplay animation feature was included at first when developing visualization with D3, that stepped through each year from 1994 to 2011. However, it was later removed since the change year-over-year was subtle which made it hard for users to recognize that the visualization was illustrating change over time.


A: On the right side of the visualization, we offered a series of tabs for users to explore. The tabs start at the highest-level view on the left and drill down to more specific data on the right. We followed the left-to-right direction because that is a natural way of reading for users in the U.S. As viewing tabs from the left to the right, it tries to deliver more specific points. We started from the overview, provide data about available types of vehicles and types of fuel, and specific AFV models as well as manufacturers.

![Figure 8: Overview tab](http://assets.websiddu.com/reports/afv/fig3.png)

B: The “Overview” tab supports comparison between states for the total number of AFVs and carbon emissions from transportation sources for each state. We limited this to 4 states maximum so that occlusion is limited and so that we meet one of Few’s fundamental strengths of graphs: the ability to see everything at once (Few 2009).
Many of our graphs have the year on the x-axis, so we chose to use line graphs because they are the most appropriate for showing change over time.

C: The final step of Shneiderman’s mantra, details on demand, are offered by all of the graphs in our visualization.

For the choropleth and overview tab views, we chose cool colors, mostly blues, to represent AFVs and warm colors, mostly reds, to represent carbon emissions. We wanted to associate feelings of nature and the environment with AFVs and to evoke the feeling of danger or warning when looking at carbon emissions.

![Figure 9: AF Vehicles tab](http://assets.websiddu.com/reports/afv/fig4.png)

A: In the next tab, titled “AF Vehicles,” selection and deselection of the vehicle types allow for filtering of data. The legend icon for that vehicle type changes when deselected, offering the user a visual reminder that the filter is in effect.
By selecting between the two display states of total number and percent of total, we support re-expressing of the data which can lead to additional insights which might not otherwise be available

B: Additionally, deselection of class type of vehicle can be conducted on the right hand side and allows a user to add or remove variables. This is designated by a filled (included) or empty (excluded) circle.

![Figure 10: Alternative Fuels Types tab](http://assets.websiddu.com/reports/afv/fig5.png)

The third tab, “Alternative Fuels Types,” and the previous tab illustrate Few’s principles of optimal quantitative scales and Tufte’s principles of graphical excellence, with all bar plots starting at 0 and the line graphs having a scale from slightly below to slightly above the range of data values (Few 2009, Tufte 1983).

![Figure 11: AFV Models tab](http://assets.websiddu.com/reports/afv/fig6.png)

In the “AFV Models” tab, the bar graph allows for re-visualizing the data, because the user may switch between grouped and stacked bars. Even though stacked graphs can be difficult to visualize direct comparisons as all the shaded portions begin and end in different areas, the thickness of the area, user’s autonomy, and quickness of speed switching between these views allows more insights to be made depending on what one may be looking at. In Figure 11 above, a snapshot of the mid-transition was selected to display both sets of grouped and stacked visualization. We chose to use bars for this graph because they are especially good at displaying differences in magnitude and making it easy to compare those differences.

![Figure 12: AFV Manufacturers tab](http://assets.websiddu.com/reports/afv/fig7.png)


A: The final tab, “AFV Manufacturers,” is dominated by a scatter plot that we intended to display all currently available AFV models, plotted by fuel economy in miles per gallon equivalent vs. carbon emissions, with other dimensions of the data set encoded as color and size of the data points.

B: This graph would also support filtering by additional dimensions such as vehicle make. This graph was aimed at users who are interested in buying an AFV and is intended to be used as a tool for searching for a vehicle that suits consumer needs.

C: Unfortunately, for this graph to be fully implemented using D3, we needed to have the data formatted into a database that would be accessible online. We did not have enough time to accomplish this, so we created a similar plot using Tableau that is accessible from a link on this tab, viewable in Figure 13 below.


![Figure 13: Tableau addendum view](http://assets.websiddu.com/reports/afv/fig7.png)


A: This graph is also a scatter plot, which is the most appropriate plot type for this data, because of its ability to encode two quantitative values: one based on its horizontal position and one based on its vertical position. According to Few (2009), points encourage us to notice patterns and points that stand out from the group as outliers.

B: Besides the quantitative values by which the points are plotted, we have encoded other values as well, including nominal data such as vehicle make, model, and class, and ordinal data such as year and number of cylinders. Again, this graph was limited in our intended result by our access to data.

C: On the y-axis we have plotted by the dollar amount that could be saved in fuel based on the average fuel costs of a regular gasoline vehicle. This is not the most easily understood dimension and makes many assumptions that are perhaps not the most accurate for all users. Had we access to the data, purchase cost or Kelley Blue Book value might have been a better choice for this axis.



<h3 id="chapter-8">8. Results</h3>

This visualization project taught us how to create a visualization that is interactive, efficient, and delivers key information. To develop the visualization, we had to gather relevant data sets, clean and format them, understand target users, create a prototype and conduct user testing, then revise the prototype based on user feedback to come up with our final visualization. We were able to have hands on experience with the project.

Being this close to such a large data set gave us ample opportunity to discover unexpected findings. Not all of these can be answered from the data we have compiled, however. For example, the highest reported ratio of AFVs to regular gasoline or diesel vehicles occurs in Washington, D.C. from the year 2000 onward. Is this because the federal government has been purchasing drastically more AFVs than the general population? Or, because reporting is voluntary, are governmental agencies simply more diligent about recording this information?

When exploring each graph in the visualization, we observed an interesting trend in the graph ‘Number of AFVs and Carbon emissions Over the years’. In 2007, we noticed a sudden decrease in carbon emissions. This motivated us to figure out more about what happened in 2007. According to Olivier et al. (2011), the Kyoto Protocol was signed in 2007 and the price of gasoline was at its peak. As with other countries that signed or ratified the Kyoto Protocol, the United States began to execute climate policies that helped to reduce carbon emissions. Greene (2006) addressed that greenhouse gas emissions can be reduced by regulating transportation. He also stressed that public policy has a larger impact than market forces to increase fuel economy.

In combination with some additional research, our visualization led us to learn more about the rise of AFV usage in the US over the past two decades.


<h3 id="chapter-9"> Further Work</h3>
Given more time and resources, we would like to probe deeper into the correlation between pollution levels and alternative fuel usage. We would like to answer questions such as: what are the carbon emissions savings by alternative fuels over the reporting period; are enough alternative fuels are being produced to meet current and projected demand; and how many alternative fuel vehicles would be required to replace traditional gasoline engines to reduce carbon emissions in the U.S. by a specified amount? Other more narrow foci would potentially have us explore specific models that may be appearing in the near future (using the DOE’s fuel economy data set). This could be used to improve our car buyer’s tool, especially when used in combination with our more general trends and comparisons.

We hoped to gather data to provide the number of AFVs sold by model, and other quantitative data by model such as Kelley Blue Book value would also have aided the utility of our AFV Manufacturer tab.


<h3 id="chapter-10"> References </h3>
<ol>
  <li>Few, S. (2009). Now You See It: Simple visualization techniques for quantitative analysis. Analytics Press.</li>
  <li>Greene, D. L. (2006). Reducing Greenhouse Gas Emissions from Transportation [Powerpoint slides]. A presentation to </li>Legislative Commission on Global Climate Change.
  <li>Oliver, J. G., et al. (2011). Long-Term Trend In Global CO2 Emissions. 2011 Report. PBL</li>
  <li>Shneiderman, B. (1996, September). The eyes have it: A task by data type taxonomy for information visualizations. In </li>Visual Languages, 1996. Proceedings., IEEE Symposium on (pp. 336-343). IEEE.
  <li>Tufte, E. R., & Graves-Morris, P. R. (1983). The Visual Display of Quantitative Information (Vol. 2). Cheshire, CT: </li>Graphics press.
  <li>Bostock, M. (2013). Data-Driven Documents. Retrieved from http://d3js.org/.</li>
  <li>“Communication Simplified.” (2014). The Noun Project. Retrieved from http://thenounproject.com/.</li>
  <li>"NVD3 Re-usable Charts for D3.js." (2014). NVD3. Retreived from http://nvd3.org/.</li>
</ol>




