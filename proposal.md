---
layout: page
title: Proposal
permalink: /proposal/
---

### Introduction

While “environmental conservation” has not been a consistent hot-button topic for political leaders for very long, climate change debating and advocacy have been increasing steadily over the last few decades. Developing countries, population spikes, the progression and supply of motor vehicles, and many more factors have made considerations to the planet’s environmental stability a necessity. We plan to utilize data from the Department of Energy to identify the trends and correlations of alternative energy vehicles (AEVs) usage. If possible, we will calculate the carbon emissions savings resulting from the alternative fuels used over the reporting period.

To stay within a reasonable scope, our plan is to focus on the United States which according to the World Bank data viewed in class had a fairly consistent ratio of motor vehicles to population throughout the last 2 decades. Given that, it will hopefully be valuable to identify rates of change for alternative energy resources, if increases with fossil/petroleum fuels correspond to alternative energy costs, which alternative energy vehicle types are expanding via cost-benefit-analysis, and which states are adopting them the quickest. While many AEVs are gaining popularity, such as the Toyota Prius, Nissan Leaf, and the Tesla Model S, there are many other alternative energy sources that can power vehicles that are not as widely known, including liquid natural gas, compressed natural gas, ethanol and methanol.

Our purpose is to locate trends and persuasively present information regarding AEVs to be used as a tool of advocacy for environmental conversation. If given enough time, wider scope, and additional data sets, we may attempt to focus on correlations of highly polluted states to AEV expansion, and attempt to identify if the amount of alternative energy being produced has enough beneficial impact on our society.

### Related Work

As a part of the data discovery and cleaning phase, we will explore existing research and presentation of related AEV and fuel sources data. Understanding the pre-existing work of others will help to refine our ideas and research questions, so that we are covering new ground and not simply confirming what already exists.

Though this data set is controversial, there is a variety of different related work out there focusing on AEV fuel consumption. For instance we will be able to stack the US against the world in terms of consumption of AEV fuel consumption based on this visualization and research from the Oil Drum.

As our data set stems from the Department of Energy and is widely available, there have been some visualizations already conducted with it, though most appear to be static. One valuable and connected visualization comes from the US Energy Information Administration, which identifies the actual locations of AEV fuel stations, which may correlate to to abundance of AEVs per state.

As we intend to look at various car models and trends over time of AEV consumption, we may find value in the comparing our work to research conducted on the “evolution of cars” over time, with particular interest in the visualization of car fuel economy since the 80s. This data stems from a large database located at fueleconomy.gov which has a downloadable XML file we can utilize to further explore data, especially looking at the information on AEV models that we can compare with our other data set’s model information.


### Intended Users

The intended users for our visualization will be have interest in conservationism, and alternative energy or motor vehicles. While it may be an overt conclusion to assume AEVs are cheaper to drive than an average car that uses unleaded gasoline, can our visualizations demonstrate that effectively? Could they be used to provide support for the argument of efficiency, as well as power of AEVs? Showing some of our sketches and concepts to actual AEV users (Prius owners, Electric Car Construction Engineers), there was interest in seeing trends of usage over time, savings in cost for general vehicles, but also more narrow interest in particular models that any consumer might be hyper-focusing on for purchase. Is there a particular model that serves to offset emissions and have the most effective fuel economy?

The persona below serves to represent one of our target user groups.


#### **Meet Motor-Junkie Mark**

Mark fancies himself a motor vehicle enthusiast, but having grown up in Montana he feels deeply connected to nature. His time spent volunteering at various National Parks has led him to focusing on environmental preservation while maintaining his love of vehicles. He began experimenting with biodiesel and vegetable oil for his cars, but wants to know how each one might relate to a gasoline equivalent. He also hopes to convince his other friends (and anyone that will listen) that AEVs are the future and should be embraced.

By looking at our visualizations, Mark may be able to view trends and popularity in AEVs, so he can convince his friends about the attitudinal progression occurring in the US towards AEVs. He will be able to see what types of fuel are equivalent in terms of power-output to gasoline, and he’ll be able to where he wants to move to next from the state breakdown of AEV acceptance.

### Objective
We will investigate data from within the U.S. regarding AEVs, fuel consumption and production, petroleum prices, and differences between states. We aim to answer several research questions, which are listed below.

  * What is the trend in AEV adoption over the past two decades?
  * Which types of AEVs are the most popular?
  * How could petroleum prices be driving AEV sales?
  * How much gasoline did AEVs save by using alternative fuels? And how does this affect carbon emissions in the U.S.?
  * Are there particular states where AEVs have become more abundant over time?
  * Is it consistent that the states with the most AEVs are also the states that have the highest consumption of alternative fuels?

To answer these questions, we will create interactive visualizations which we will use as a tool in creating a communicative final report. Based on answers, we want to deliver a persuasive presentation.


### Data
We will be using data sets found primarily on the data.gov website, with a focus on AEV production and purchasing, energy consumption, and petroleum prices and production.

The U.S. Department of Energy releases comprehensive reports covering many aspects of AEV sales in the U.S. are reported annually, with a total range of 1992-2009 currently available. These reports include detailed information such as number of vehicles by fuel type, state, vehicle class, and number of “gasoline-equivalent gallons” of alternative fuel used. We will primarily use these data sets to look at increase in AEVs over time, and look for trends relating to fuel or vehicle type. These reports are released annually, with 20-30 worksheets per report. The data on each worksheet varies from few to several hundred individual points, but when combined over the range of 1992 (the earliest dates reported) to 2009, the data set becomes fairly large. The report’s format changes slightly over the range of years reporting, so there will be significant combining and cleaning work before we can begin deeper analysis.

This additional data set from the DOE displays numerous variables about manufacturer make and model of vehicles and their respected fuel types and consumption, ranging from 1985-2015, that we can truncate to focus on the applicable years. This reduces the data to 18,021 data points measuring variables like fuel type, fuel usage, MPG, emissions data, # of cylinders, and the prospective amount of money saved over time by using a type of model compared to an average gasoline powered vehicle.

The U.S. Energy Information Administration released a report detailing petroleum fuel prices by year, quarter, and month for the past several decades. These are reported both in the nominal price and the adjusted U.S. dollar value for October 2014. Although AEVs likely have had little to no impact on the price of gasoline, it will be a useful addition and will add depth to our analysis. In addition to the price of petroleum fuels, the DOE also released a report of alternative energy prices (in gasoline gallon equivalents) dating back to the year 2000, which we will incorporate into our analysis.

Some of the dimensions in our data set include: gasoline equivalent usage, number of alternative fuel vehicles in use by state, number of alternative fuel vehicles produced, number of AFV/HEV Models offered by OEMs, the total number of alternative vehicles, the type of AEVs by vehicle class, and the price of petroleum and alternative fuels.

The DOE reports include tables with “gasoline gallon equivalents” of each fuel type used annually, which, given enough time and scope of the project, we will utilize to determine carbon emissions reduced by AEVs. To do this, we will calculate the carbon emissions (if any) of that alternative energy source and compare these values to the equivalent emissions that would have resulted from driving a gasoline car.

Based on collected data sets, we will correlate different variables and dimensions to answer the proposed questions. AEVs have the potential to make an impact in the total carbon emissions of the U.S. so understanding adoptions rates of AEVs is useful. We also want to reveal how much carbon emissions have been reduced by AEVs. To figure out competitive advantages of alternative fuels, we will contrast the price of petroleum fuels with the price of alternative fuels. The number of AFV/HEV Models offered by OEMs correlated with types of alternative fuel vehicles will show what types of vehicles were popular in a particular time. In addition, comparison of the number of AEVs within the states drives the trend in each state.


### Plan
**Week 1, 15 Oct:** In this week we are going to clean and combine the data. We will organize and analyze the data to understand the data. We are planning use some open source tools such as http://openrefine.org/ to make sure that we have clean and proper data.

_Deliverables_

- All the required data sets in .xls format

**Week 2, 22 Oct:** This week we will ideate different ways to present our data. Each of us in our team will come up with a couple of their own designs and prototypes. The team will meet up and discuss on these ideas and prototypes and finalize a design and can create some paper prototypes of the same.

Deliverables:

- Couple of ideas from everyone in the team
- Final paper prototypes

**Week 3, 29 Oct:** This week we will test our paper prototypes with different users to make sure that if that works for all users and refine it if any changes are needed. This week we will preparing the mid term presentation.

_Deliverables_

- Testing prototypes results and refinements
- Midterm presentation

**Week 4, 5 Nov:** This week we will implement the design in Tableau. We are going to build a dashboard and a storyboard based on our designs.

_Deliverables_

- A dashboard with all the visualizations designed

**Week 5, 12 Nov:** This week we will test our dashboard with different users and get the feedback and see if any iterations are required.

_Deliverables_

  - Testing the dashboard, list changes
  - The finalized dashboard

**Week 6, 19 Nov:** We will start writing the report. We will articulate all of our findings, the process we followed and what questions we have answered, etc. We are also going to refine and review our visualization.

_Deliverables_

- Final project report
- Review and refine the visualization

**Week 7, 26 Nov:** This week we are going to work on preparing the final presentation. Along with this we are going to refine our review.

_Deliverables_

- Final project presentation
- Review the writeup

**Week 8, 3 Dec:** This week we are going to prepare for the final presentation.

### Roles

- Ivan Koveshnikov: Usability evaluator
- Laurel Stone: Project manager, point of contact
- Sangeun Lee: Designer
- Siddhartha Gudipati: Programmer



### Result
Our anticipated results will answer our various research questions with interactive visualizations. The result will include identified trends in alternative fuel vehicle usage, how petroleum prices affect alternative fuel vehicle sales, and how alternative fuel vehicles reduced traditional petroleum fuel usage. These visualizations will help to generate discussion about the effectiveness and progression of AEV usage in the United States, and help provide support for individuals looking to make statements about AEV utilization for political reasons. We recognize that exploring a phenomenon as richly integrated into American Culture as the automobile can be controversial, as AEV debates are sometimes incendiary and politically charged, with car connoisseurs and authoritarians skewing perception on electric cars, as witnessed in the Tesla vs. Top Gear lawsuit. Nonetheless, there are many vehicle options out there that may fall under the AEV category that do not receive as notable attention as hybrid and electric types that individuals may find valuable. Showcasing general trends and public perception via large data is an overarching goal of ours, which may be used to provide leverage to this discussion. Ultimately, we will propose a story that increases awareness about the efficiency of alternative fuel vehicles.

Given more time and resources, we would like to probe deeper into the correlation between pollution levels and alternative fuel usage. We would like to answer questions such as what are the carbon emissions savings by alternative fuels over the reporting period, are enough alternative fuels are being produced to meet current and projected demand, and how many alternative fuel vehicles would be required to replace traditional gasoline engines to reduce carbon emissions in the U.S. by a specified amount? Other more narrow foci will potentially have us explore specific models that may be appearing in the near future (using the DOE’s fuel economy data set) of 2015 as a buyer’s hyper focus, especially in comparison to our more general trends and comparisons. Thus, anticipated fuel prices will be suggested to emphasize not only environmental effects but also efficiency in price.

### References

- “Per capital consumption of various fuels” - The Oil Drum
- U.S. Open Data Catalog: https://www.data.gov/
- U.S. DOE report on alternative fuel prices: http://www.afdc.energy.gov/uploads/ publication/alternative_fuel_price_report_july_2014.pdf
- EPA Emission Facts: http://www.epa.gov/otaq/consumer/f00013.pdf
- Davenport, James: If We Assume: “Visualizing the Evolution of Cars” 01/04/13
- US Department of Energy: “FuelEconomy.gov Web Services”
- “Who killed the electric car?” Wikipedia
- SF Gate: “Tesla Takes BBC’s Top Gear to Court”

