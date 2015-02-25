describe('simulationInputController', function () {
	var controller, scope;

	function getEnumValues(enums) {
		var values = $.map(enums, function (item, index) {
			return item.value;
		})

		return values;
	}

	beforeEach(module('cFIREsim'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		controller = $controller('simulationInputController', {
			$scope: scope
		});		
	}));

	// Enum Tests. May be overkill but as they are just stored in arrays in the controller they could easily be broken by accident.
	it('has an enum for booleans', function () {
		expect(scope.boolOptions).toEqual([true, false]);
	});

	it('has an enum for inflation types', function () {
		expect(getEnumValues(scope.inflationTypes)).toEqual(['CPI', 'constant']);
	})

	it('has an enum for data option types', function () {
		expect(getEnumValues(scope.dataOptionTypes)).toEqual(['historicalAll', 'historicalSpecific', 'constant']);
	})

	it('has an enum for investigate option types', function () {
		expect(getEnumValues(scope.investigateOptionTypes)).toEqual(['none', 'single']);
	})

	// TODO: Should this check the form inputs for each enum too?
	it('has an enum for spending plan types', function () {
		expect(getEnumValues(scope.spendingPlanTypes)).toEqual([
			'inflationAdjusted',
			'notInflationAdjusted',
			'percentOfPortfolio',
			'hebelerAutopilot',
			'variableSpending',
			'guytonKlinger'
		]);
	})

	it('has an enum for spending floor types', function () {
		expect(getEnumValues(scope.spendingFloorTypes)).toEqual(['pensions', 'definedValue', 'none']);
	})

	it('has an enum for spending ceiling types', function () {
		expect(getEnumValues(scope.spendingCeilingTypes)).toEqual(['none', 'definedValue']);
	})

	it('has an enum for percentage of portfolio types', function () {
		expect(getEnumValues(scope.percentageOfPortfolioTypes)).toEqual(['constant', 'withFloorAndCeiling']);
	})

	it('has an enum for percentage of portfolio floor limit types', function () {
		expect(getEnumValues(scope.percentOfPortfolioFloorLimitTypes)).toEqual(['percentageOfPortfolio', 'percentageOfPreviousYear', 'none']);
	})

	it('has an enum for percentage of portfolio ceiling limit types', function () {
		expect(getEnumValues(scope.percentOfPortfolioCeilingLimitTypes)).toEqual(['percentageOfPortfolio', 'none']);
	})

	it('has an enum for retire again amount types', function () {
		expect(getEnumValues(scope.retireAgainAmountTypes)).toEqual(['valueAtRetirement', 'customValue']);
	})



	// refresh form

	// refresh data form

	// refresh investigate form

	// clear fields

	// run

	// save

	// enable rebalancing

	// enable change allocation

	// remove object

	// change inflation adjusted

	// change inflation type

	// clear end of year

	// clear property


	// Data to use - ngChange

	// Investigate - ngChange

	// Rebalance Annually - ngChange

	// Keep Allocation Constant - ngChange

	// Spending Plan - ngChange

	// Percentage Type - ngChange

	// Floor Spending - ngShow

	// Floor Spending - ngChange

	// Never Less Than - ngDisabled

	// Ceiling Spending - ngChange

	// Never More Than - ngDisabled

	// $ (after Spending Floor (Inflation Adjusted)) - ngDisabled

	// $ (after Spending Ceiling (Inflation Adjusted)) - ngDisabled

	// Pensions row Inflation Adjusted - ngChange

	// Pensions row Inflation Type - ngChange ngDisabled

	// Pensions row Inflation % - ngChange ngDisabled

	// Pensions row (empty column) - ngClick

	// Add Pension - ngClick

	// Other Income row Recurring - ngChange
	
	// Other Income row End Year - ngDisabled

	// Other Income row Inflation Adjusted - ngChange 

	// Other Income row Inflation Type - ngChange ngDisabled

	// Other Income row Inflation Rate - ngDisabled

	// Other Income row Delete - ngClick

	// Other Income row Add Savings - ngClick

	// Extra Spending row Recurring - ngChange

	// Extra Spending row End Year - ngDisabled

	// Extra Spending row Inflation Adjusted - ngChange

	// Extra Spending row Inflation Type - ngChange ngDisabled

	// Extra Spending row Inflation Rate - ngDisabled

	// Extra Spending row Delete - ngClick

	// Extra Spending row Add - ngClick

	// Run Simulation - ngclick

})