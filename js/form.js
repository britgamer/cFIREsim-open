$(document).ready(function () {
    angular.module('cFIREsim', [])
        .controller('simulationInputController', ['$scope', function($scope) {
            $scope.data = {
                retirementStartYear: 2015,
                retirementEndYear: 2044,
                data: {
                    method: "historicalAll",
                    start: 1900,
                    end: 1970,
                    growth: 8
                },
                investigate: {
                    type: "none",
                    single: 1966
                },
                portfolio: {
                    initial: 1000000,
                    percentEquities: 75,
                    percentBonds: 25,
                    percentGold: 0,
                    percentCash: 0,
                    percentFees: 0.18,
                    growthOfCash: 0.25,
                    rebalanceAnnually: true,
                    constantAllocation: true
                },
                spending: {
                    initial: 40000,
                    method: 'inflationAdjusted',
                    floor: 'pensions',
                    ceiling: 'none',
                    percentageOfPortfolioType: 'constant',
                    percentageOfPortfolioFloorType: 'percentageOfPortfolio',
                    percentageOfPortfolioCeilingType: 'percentageOfPreviousYear',
                    percentageOfPortfolioFloorPercentage: 7,
                    percentageOfPortfolioPercentage: 4,
                    retireAgainAmountType: 'valueAtRetirement',
                    hebelerAgeOfRetirement: 60, 
                    hebelerWeightedCPI: 50,
                    hebelerWeightedRMD: 50,
                    variableSpendingZValue: 0.5,
                    guytonKlingerExceeds: 20,
                    guytonKlingerFall: 20,
                    guytonKlingerRaise: 10,
                    guytonKlingerCut: 10
                },
                extraIncome: {
                    socialSecurity: {
                        val: 0,
                        startYear: 2032,
                        endYear: 2100
                    },
                    socialSecuritySpouse: {
                        val: 0,
                        startYear: 2032,
                        endYear: 2100
                    },
                    pensions: [{
                        label: 'One',
                        val: 0,
                        startYear: 2030,
                        endYear: null,
                        recurring: true,
                        inflationAdjusted: true,
                        inflationType: 'CPI',
                        inflationRate: ''
                    },{
                        label: 'Two',
                        val: 0,
                        startYear: 2030,
                        endYear: null,
                        recurring: true,
                        inflationAdjusted: true,
                        inflationType: 'CPI',
                        inflationRate: ''
                    }],
                    extraSavings: [{
                        label: 'One',
                        val: 0,
                        startYear: 2030,
                        endYear: 2035,
                        recurring: true,
                        inflationAdjusted: true,
                        inflationType: 'CPI',
                        inflationRate: ''
                    },{
                        label: 'Two',
                        val: 0,
                        startYear: 2031,
                        endYear: 2041,
                        recurring: true,
                        inflationAdjusted: true,
                        inflationType: 'CPI',
                        inflationRate: ''
                    }]
                },
                extraSpending: [{
                    label: 'One',
                    val: 0,
                    startYear: 2030,
                    endYear: 2040,
                    recurring: true,
                    inflationAdjusted: true,
                    inflationType: 'CPI',
                    inflationRate: ''
                },{
                    label: 'Two',
                    val: 0,
                    startYear: 2030,
                    endYear: 2041,
                    recurring: true,
                    inflationAdjusted: true,
                    inflationType: 'CPI',
                    inflationRate: ''
                }]
            }

            $scope.boolOptions = [
                true,
                false
            ]

            $scope.inflationTypes = [            
                {
                    text: 'CPI',
                    value: 'CPI'
                },
                {
                    text: 'Constant %',
                    value: 'constant'
                }
            ]

            $scope.dataOptionTypes = [
                {
                    text: 'Historical Data - All',
                    value: 'historicalAll'
                },
                {
                    text: 'Historical Data - Specific Years',
                    value: 'historicalSpecific',
                    formInputs: [
                        'historicalSpecificOptions'
                    ]
                },
                {
                    text: 'Constant Market Growth',
                    value: 'constant',
                    formInputs: [
                        'constantGrowthOptions'
                    ]
                }
            ]

            $scope.investigateOptionTypes = [
                {
                    text: 'None ',
                    value: 'none',
                },
                {
                    text: 'Single Simulation Cycle ',
                    value: 'single',
                    formInputs: [
                        'singleCycleOptions'
                    ]
                }
            ]

            $scope.spendingPlanTypes = [
                {
                    text: 'Inflation Adjusted',
                    value: 'inflationAdjusted',
                    formInputs: [
                        'yearlySpendingOptions'
                    ]
                },{
                    text: 'Not Inflation Adjusted',
                    value: 'notInflationAdjusted',
                    formInputs: [
                        'yearlySpendingOptions',
                        'spendingLimitOptions'
                    ]
                },{
                    text: '% of Portfolio',
                    value: 'percentOfPortfolio',
                    formInputs: [
                        'percentageOfPortfolioOptions'
                    ]
                },{
                    text: 'Hebeler Autopilot',
                    value: 'hebelerAutopilot',
                    formInputs: [
                        'yearlySpendingOptions',
                        'hebelerAutopilotOptions',
                        'spendingLimitOptions'
                    ]
                },{
                    text: 'Variable Spending',
                    value: 'variableSpending',
                    formInputs: [
                        'yearlySpendingOptions',
                        'variableSpendingOptions',
                        'spendingLimitOptions'
                    ]
                },{
                    text: 'Guyton-Klinger',
                    value: 'guytonKlinger',
                    formInputs: [
                        'yearlySpendingOptions',
                        'guytonKlingerOptions',
                        'spendingLimitOptions'
                    ]
                }/*,{
                    text: 'Retire Again and Again',
                    value: 'retireAgainAndAgain',
                    formInputs: [
                        'yearlySpendingOptions',
                        'retireAgainAndAgainOptions',
                        'spendingLimitOptions'
                    ]
                }
                ,{
                    text: 'Original VPW',
                    value: 'originalVPW',
                    formInputs: [
                        'spendingLimitOptions'
                    ]
                },{
                    text: 'Custom VPW',
                    value: 'customVPW',
                    formInputs: [
                        'yearlySpendingOptions',
                        'customVPWOptions',
                        'spendingLimitOptions'
                    ]
                }*/
            ]

            $scope.spendingFloorTypes = [
                {
                    text: 'Pensions/SS',
                    value: 'pensions'
                },
                {
                    text: 'Defined Value',
                    value: 'definedValue'
                },
                {
                    text: 'No Floor',
                    value: 'none'
                }
            ]

            $scope.spendingCeilingTypes = [
                {
                    text: 'No Ceiling',
                    value: 'none'
                },
                {
                    text: 'Defined Value',
                    value: 'definedValue'
                }
            ]

            $scope.percentageOfPortfolioTypes = [
                {
                    text: 'Constant %',
                    value: 'constant'
                },
                {
                    text: 'With Floor and Ceiling Values',
                    value: 'withFloorAndCeiling'
                }
            ]

            $scope.percentOfPortfolioFloorLimitTypes = [
                {
                    text: 'As a % of Starting Portfolio',
                    value: 'percentageOfPortfolio'
                },
                {
                    text: '% of Previous Year',
                    value: 'percentageOfPreviousYear'
                },
                {
                    text: 'No Limit',
                    value: 'none'
                }
            ]

            $scope.percentOfPortfolioCeilingLimitTypes = [
                {
                    text: 'As a % of Starting Portfolio',
                    value: 'percentageOfPortfolio'
                },
                {
                    text: 'No Limit',
                    value: 'none'
                }
            ]

            $scope.retireAgainAmountTypes = [
                {
                    text: 'Portfolio Value at Retirement',
                    value: 'valueAtRetirement'
                },
                {
                    text: 'Custom Portfolio Value',
                    value: 'customValue'
                }
            ]

            // Refreshes the spending form by hiding all the sections, showing the correct ones, then wiping the data in the still hidden ones.
            $scope.refreshSpendingForm = function () {
                var spendingPlan = $.grep($scope.spendingPlanTypes, function (spendingPlanType) {
                    return spendingPlanType.value == $scope.data.spending.method
                });

                $('.spendingOptions').hide();

                if (spendingPlan.length == 1) {
                    $.each(spendingPlan[0].formInputs, function (index, formInput) {
                        $('#' + formInput).show();
                    });
                }

                //Removed clearing of fields, so that initial spending value wouldn't disappear when percentOfPortfolio was selected. I don't think this adversely affects the code, but will leave this for posterity. 
                //$scope.clearFields('.spendingOptions:hidden');
            }

            $scope.refreshDataForm = function () {
                if($scope.data.data.method == "historicalSpecific"){
                   $('#historicalSpecificOptions').show(); 
                   $('#constantGrowthOptions').hide(); 
                }else if($scope.data.data.method == "constant"){
                    $('#constantGrowthOptions').show();
                    $('#historicalSpecificOptions').hide();
                }else if($scope.data.data.method == "historicalAll"){
                    $('#constantGrowthOptions').hide();
                    $('#historicalSpecificOptions').hide();
                }
            }
            $scope.refreshInvestigateForm = function () {
                if($scope.data.investigate.type == "single"){
                    $('#singleCycleOptions').show(); 
                }else{
                    $('#singleCycleOptions').hide();
                }
                
            } 

            // Clears all the inputs and selects within the items returned by the selector.
            $scope.clearFields = function (selector) {
                // For the spending option sections which are still hidden, clear their values.
                $.each($(selector), function (index, option) {
                    $('input', option).val('');
                    $('select', option).prop('selectedIndex', 0);

                    // If called without the timeout Angular with throw and error the first time this function is called.
                    setTimeout(
                        function () {
                            $('select', option).trigger('change')
                        }, 0, option);
                });
            }

            $scope.runSimulation = function () {
                Simulation.runSimulation($scope.data);
            }

            $scope.saveSimulation = function () {
                console.log($scope.data);

                var uri = 'data:text/csv;charset=utf-8,' + JSON.stringify($scope.data);
                var link = document.createElement("a");
                link.href = uri;

                //set the visibility hidden so it will not effect on your web-layout
                link.style = "visibility:hidden";
                link.download = "simulation.json";

                //this part will append the anchor tag and remove it after automatic click
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }

            $scope.loadSimulation = function () {
               // $scope.data =   
               //Load from JSON
            }

            // TODO: Could these 2 be turned into declarative Angular statements?
            $scope.enableRebalancing = function (enable) {
                $('#portfolioPanel [name=constantAllocationRadio]').attr('disabled', !enable);
                $scope.enableChangeAllocation(enable);
            }

            $scope.enableChangeAllocation = function (enable) {
                var inputs = $('#targetAssetsPanel input');

                if (!enable) {
                    inputs.val('');
                }

                inputs.attr('disabled', !enable);
            }

            // Adds a saving or pension object.
            $scope.addObject = function (array) {
                array.push({
                    label: '',
                    val: 0,
                    startYear: 2030,
                    endYear: 2035,
                    recurring: true,
                    inflationAdjusted: true,
                    inflationType: 'CPI',
                    inflationRate: ''
                });
            }

            $scope.removeObject = function (index, array) {
                array.splice(index, 1);
            }

            // TODO: These there methods which clear a property of an object in an array could probably be generalized.
            $scope.changeInflationAdjusted = function (index, array) {
                var object = array[index];

                if (!object.inflationAdjusted) {
                    object.inflationType = '';
                }
                $scope.changeInflationType(index, array);
            }

            $scope.changeInflationType = function (index, array) {
                var object = array[index];

                if (object.inflationType != 'constant') {
                    object.inflationRate = '';
                }
            }

            $scope.clearEndYear = function (index, array) {
                var object = array[index];

                if (!object.recurring) {
                    object.endYear = '';
                }
            }

            $scope.clearProperty = function (clear, path) {
                if (clear) {
                    var pathArray = path.split('.');
                    var property = $scope;

                    for (var i = 0; i < pathArray.length; i++) {
                        if (i == (pathArray.length - 1)) {
                            property[pathArray[i]] = '';
                        }
                        else {
                            property = property[pathArray[i]];                            
                        }
                    }
                }
            }

            // Setup the spending form when the controller loads.
            $scope.refreshSpendingForm()
        }]);


})