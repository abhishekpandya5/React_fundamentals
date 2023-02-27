export const RESTAURANT_DATA = {
	statusCode: 0,
	data: {
		cacheExpiryTime: 320,
		pages: 1,
		pageIndex: 0,
		scrubber: 0,
		filters: [
			{
				type: 'FilterWidget',
				title: 'Cuisines',
				key: 'CUISINES',
				configType: 'checkbox',
				visible: 1,
				options: [
					{ option: 'Afghani', selected: 0, visible: 1 },
					{ option: 'American', selected: 0, visible: 1 },
					{ option: 'Andhra', selected: 0, visible: 1 },
					{ option: 'Arabian', selected: 0, visible: 1 },
					{ option: 'Asian', selected: 0, visible: 1 },
					{ option: 'Awadhi', selected: 0, visible: 1 },
					{ option: 'Bakery', selected: 0, visible: 1 },
					{ option: 'Barbecue', selected: 0, visible: 1 },
					{ option: 'Bengali', selected: 0, visible: 1 },
					{ option: 'Beverages', selected: 0, visible: 1 },
					{ option: 'Bihari', selected: 0, visible: 1 },
					{ option: 'Biryani', selected: 0, visible: 1 },
					{ option: 'Buffalo meat', selected: 0, visible: 1 },
					{ option: 'Burgers', selected: 0, visible: 1 },
					{ option: 'Cafe', selected: 0, visible: 1 },
					{ option: 'Chaat', selected: 0, visible: 1 },
					{ option: 'Chinese', selected: 0, visible: 1 },
					{ option: 'Combo', selected: 0, visible: 1 },
					{ option: 'Continental', selected: 0, visible: 1 },
					{ option: 'Desserts', selected: 0, visible: 1 },
					{ option: 'Fast Food', selected: 0, visible: 1 },
					{ option: 'French', selected: 0, visible: 1 },
					{ option: 'Grill', selected: 0, visible: 1 },
					{ option: 'Healthy Food', selected: 0, visible: 1 },
					{ option: 'Home Food', selected: 0, visible: 1 },
					{ option: 'Hyderabadi', selected: 0, visible: 1 },
					{ option: 'Ice Cream', selected: 0, visible: 1 },
					{ option: 'Ice Cream Cakes', selected: 0, visible: 1 },
					{ option: 'Indian', selected: 0, visible: 1 },
					{ option: 'Italian', selected: 0, visible: 1 },
					{ option: 'Italian-American', selected: 0, visible: 1 },
					{ option: 'Jain', selected: 0, visible: 1 },
					{ option: 'Japanese', selected: 0, visible: 1 },
					{ option: 'Juices', selected: 0, visible: 1 },
					{ option: 'Kebabs', selected: 0, visible: 1 },
					{ option: 'Lebanese', selected: 0, visible: 1 },
					{ option: 'Lucknowi', selected: 0, visible: 1 },
					{ option: 'Maharashtrian', selected: 0, visible: 1 },
					{ option: 'Mediterranean', selected: 0, visible: 1 },
					{ option: 'Mexican', selected: 0, visible: 1 },
					{ option: 'Middle Eastern', selected: 0, visible: 1 },
					{ option: 'Mughlai', selected: 0, visible: 1 },
					{ option: 'Nepalese', selected: 0, visible: 1 },
					{ option: 'North Eastern', selected: 0, visible: 1 },
					{ option: 'North Indian', selected: 0, visible: 1 },
					{ option: 'Oriental', selected: 0, visible: 1 },
					{ option: 'Paan', selected: 0, visible: 1 },
					{ option: 'Pan-Asian', selected: 0, visible: 1 },
					{ option: 'Pastas', selected: 0, visible: 1 },
					{ option: 'Persian', selected: 0, visible: 1 },
					{ option: 'Pizzas', selected: 0, visible: 1 },
					{ option: 'Punjabi', selected: 0, visible: 1 },
					{ option: 'Rajasthani', selected: 0, visible: 1 },
					{ option: 'Salads', selected: 0, visible: 1 },
					{ option: 'Seafood', selected: 0, visible: 1 },
					{ option: 'Snacks', selected: 0, visible: 1 },
					{ option: 'South Indian', selected: 0, visible: 1 },
					{ option: 'Street Food', selected: 0, visible: 1 },
					{ option: 'Sweets', selected: 0, visible: 1 },
					{ option: 'Tandoor', selected: 0, visible: 1 },
					{ option: 'Tex-Mex', selected: 0, visible: 1 },
					{ option: 'Thai', selected: 0, visible: 1 },
					{ option: 'Thalis', selected: 0, visible: 1 },
					{ option: 'Tibetan', selected: 0, visible: 1 },
					{ option: 'Turkish', selected: 0, visible: 1 },
					{ option: 'Waffle', selected: 0, visible: 1 }
				],
				detail: '',
				heading: 'Cuisines',
				applicable: 1,
				searchable: 1
			},
			{
				type: 'FilterWidget',
				title: 'Show Restaurants With',
				key: 'SHOW_RESTAURANTS_WITH',
				configType: 'checkbox',
				visible: 1,
				options: [
					{ option: 'Offers', selected: 0, visible: 1 },
					{ option: 'Pure Veg', selected: 0, visible: 1 }
				],
				detail: '',
				heading: 'Offers & More',
				applicable: 1,
				searchable: 0
			}
		],
		sorts: [
			{
				type: 'SortWidget',
				key: 'RELEVANCE',
				title: 'Relevance',
				selected: 1,
				visible: 1,
				defaultSelection: true
			},
			{
				type: 'SortWidget',
				key: 'DELIVERY_TIME',
				title: 'Delivery Time',
				selected: 0,
				visible: 1,
				defaultSelection: false
			},
			{
				type: 'SortWidget',
				key: 'RATING',
				title: 'Rating',
				selected: 0,
				visible: 1,
				defaultSelection: false
			},
			{
				type: 'SortWidget',
				key: 'COST_FOR_TWO',
				title: 'Cost: Low to High',
				selected: 0,
				visible: 1,
				defaultSelection: false
			},
			{
				type: 'SortWidget',
				key: 'COST_FOR_TWO_H2L',
				title: 'Cost: High to Low',
				selected: 0,
				visible: 1,
				defaultSelection: false
			}
		],
		configs: {
			ribbons: {
				PREORDER: {
					type: 'PREORDER',
					text: 'Preorder',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#d53d4c',
					bottomBackgroundColor: '#af2330',
					priority: 3
				},
				EXCLUSIVE: {
					type: 'EXCLUSIVE',
					text: 'Exclusive',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#fa4a5b',
					bottomBackgroundColor: '#d12a3b',
					priority: 2
				},
				NEW: {
					type: 'NEW',
					text: 'Newly Added',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#d53d4c',
					bottomBackgroundColor: '#af2330',
					priority: 4
				},
				REPEAT: {
					type: 'REPEAT',
					text: 'Repeat',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#D53D4C',
					bottomBackgroundColor: '#B02331',
					priority: 6
				},
				CLOUD: {
					type: 'CLOUD',
					text: 'Daily Menus',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#fa4a5b',
					bottomBackgroundColor: '#d12a3b',
					priority: 5
				},
				PREMIUM: {
					type: 'PREMIUM',
					text: 'Premium',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#8a584b',
					bottomBackgroundColor: '#583229',
					priority: 7
				},
				PROMOTED: {
					type: 'PROMOTED',
					text: 'Promoted',
					textColor: '#ffffff',
					imageId: 'sfefefefeegeg',
					topBackgroundColor: '#3a3c41',
					bottomBackgroundColor: '#1e2023',
					priority: 1
				}
			},
			croutons: {
				RAIN: {
					type: 'Crouton',
					bgColor: '#282C3F',
					icon: 'surge_listing_piuzrv',
					textColor: '#ffffff',
					title: 'Bad Weather',
					message: '${amount} extra levied on some restaurants'
				},
				SERVICEABLE_WITH_BANNER_RAIN: {
					type: 'Crouton',
					bgColor: '#282C3F',
					icon: 'rain_crouton_4x',
					textColor: '#ffffff',
					title: 'Bad Weather',
					message: 'Few restaurants unserviceable due to rains'
				}
			}
		},
		cards: [
			{
				cardType: 'carousel',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'carousel',
					subtype: 'topCarousel',
					data: {
						cards: [
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 635529,
									creativeId: 'rng/md/carousel/production/pneknawbadtvceqzwiep',
									type: 'restaurantCollectionV2',
									link: '49301',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 304998,
									creativeId: 'rng/md/carousel/production/awurei8ypqkafoqay9ym',
									type: 'restaurantCollectionV2',
									link: '47668',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 619141,
									creativeId: 'rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t',
									type: 'restaurantCollectionV2',
									link: '56413',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 619143,
									creativeId: 'rng/md/carousel/production/lzkjv3sxwwjkzg0vxpvt',
									type: 'restaurantCollectionV2',
									link: '56422',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 619142,
									creativeId: 'rng/md/carousel/production/tgnvusbs3fnzz7xupeno',
									type: 'restaurantCollectionV2',
									link: '56417',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 619145,
									creativeId: 'rng/md/carousel/production/nhubtkw7dukg3ukcmpam',
									type: 'restaurantCollectionV2',
									link: '56414',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 607193,
									creativeId: 'rng/md/carousel/production/s5ug2key6e2sptaxku5v',
									type: 'restaurantCollectionV2',
									link: '56410',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 607195,
									creativeId: 'rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3',
									type: 'restaurantCollectionV2',
									link: '56421',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									thirdPartyVendor: '',
									thirdPartyAddress: false
								}
							}
						]
					}
				},
				parentWidget: false
			},
			{
				cardType: 'carousel',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'carousel',
					subtype: 'openFilter',
					data: {
						cards: [
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181684,
									creativeId: 'bkhjfipzydkoqncrxpyi',
									type: 'restaurantCollectionV2',
									link: '11718',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									title: 'Offers Near You',
									subtitle: '0 OPTIONS',
									restaurants: [],
									totalCount: 0,
									dwebOpenFilterTitle: 'Offers Near You',
									dwebOpenFilterBgColor: '#FF0000',
									dwebOpenFilterSelectIcon: 'eyperwsfhaoa5vktjtu4',
									dwebOpenFilterDeselectIcon: 'urw8usdf4mk9aywd59gq'
								}
							},
							{
								type: 'carouselElement',
								subtype: 'image',
								data: {
									bannerId: 181680,
									creativeId: 'a3jqjjod5taken7dh1bs',
									type: 'restaurantCollectionV2',
									link: '11721',
									cityId: 0,
									restaurantUuid: '',
									restaurantParentId: '0',
									title: 'Veg Only',
									subtitle: '0 OPTIONS',
									restaurants: [],
									totalCount: 0,
									dwebOpenFilterTitle: 'Vegetarian Options',
									dwebOpenFilterBgColor: '#FF0000',
									dwebOpenFilterSelectIcon: 'qtjc8dzfexg72lug37a0',
									dwebOpenFilterDeselectIcon: 'bm8bziikwyvwqsml1clm'
								}
							}
						]
					}
				},
				parentWidget: false
			},
			{
				cardType: 'seeAllRestaurants',
				layoutAlignmentType: 'VERTICAL',
				data: {
					type: 'seeAllRestaurants',
					data: {
						title: 'SEE ALL',
						totalOpenRestaurants: 942,
						cards: [
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '655899',
									name: 'Wraps Kathi Rolls',
									uuid: '04c2f1f3-d719-4ad3-919a-9844f9bddfd1',
									city: '24',
									area: 'Rajendra Nagar',
									totalRatingsString: '20+ ratings',
									cloudinaryImageId: 'bc8766f3822002df67844157cc25b9ed',
									cuisines: ['Snacks', 'Fast Food'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 27,
									minDeliveryTime: 27,
									maxDeliveryTime: 27,
									slaString: '27 MINS',
									lastMileTravel: 3,
									slugs: {
										restaurant: 'wraps-kathi-rolls-kaushambi-kaushambi',
										city: 'noida'
									},
									cityState: '24',
									address:
										'Shop no.1, plot no. 3, Sec-5 Rajendra nagar sahibabad ghaziabad  201005',
									locality: 'Sector 5',
									parentId: 226991,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FLAT125 off',
										shortDescriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '₹125 OFF',
										shortDescriptionList: [
											{
												meta: 'Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									ribbon: [{ type: 'PROMOTED' }],
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=5996738~p=1~eid=00000186-8eb6-729a-3d40-4c840099015e',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '3 kms',
									hasSurge: false,
									sla: {
										restaurantId: '655899',
										deliveryTime: 27,
										minDeliveryTime: 27,
										maxDeliveryTime: 27,
										lastMileTravel: 3,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: true,
									avgRating: '4.2',
									totalRatings: 20,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '254022',
									name: "McDonald's",
									uuid: '68c691ca-214c-4734-baeb-3f1c1abc21fe',
									city: '4',
									area: 'Dilshad Gardens',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: '1293a58ab5610f4c730c3d8cb6ac1b65',
									cuisines: ['American'],
									tags: [],
									costForTwo: 40000,
									costForTwoString: '₹400 FOR TWO',
									deliveryTime: 27,
									minDeliveryTime: 27,
									maxDeliveryTime: 27,
									slaString: '27 MINS',
									lastMileTravel: 3.799999952316284,
									slugs: {
										restaurant:
											'mcdonalds-delhi-dilshad-garden-dmrc-dilshad-gardens',
										city: 'delhi'
									},
									cityState: '4',
									address:
										'Delhi Dilshad Garden DMRC, G-2A, Ground Floor & Unit No.104, First Floor,  Dilshad Garden Metro Station. Delhi-110095',
									locality: 'Grand Trunk Road',
									parentId: 630,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '40% off',
										shortDescriptionList: [
											{
												meta: '40% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '40% off up to ₹80 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '40% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '40% off up to ₹80 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '3.7 kms',
									hasSurge: false,
									sla: {
										restaurantId: '254022',
										deliveryTime: 27,
										minDeliveryTime: 27,
										maxDeliveryTime: 27,
										lastMileTravel: 3.799999952316284,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '4.0',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '288883',
									name: 'Baba Hotel',
									uuid: 'ce1c1176-30cc-4067-96b3-73bcccd6c7ff',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'qeqwquacqgvpieid3wyk',
									cuisines: ['Indian', 'North Indian'],
									tags: [],
									costForTwo: 25000,
									costForTwoString: '₹250 FOR TWO',
									deliveryTime: 25,
									minDeliveryTime: 25,
									maxDeliveryTime: 25,
									slaString: '25 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant: 'baba-hotel-sahibabad-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'WAZIRABAD ROAD BHOPURA NEAR BHARAT PETROLPUMP 201005, District - Ghaziabad, STATE - Uttar Pradesh',
									locality: 'Vivekanand Marg',
									parentId: 14203,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '50% off',
										shortDescriptionList: [
											{
												meta: '50% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '50% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '288883',
										deliveryTime: 25,
										minDeliveryTime: 25,
										maxDeliveryTime: 25,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.3',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '461173',
									name: 'Khadak Singh Da Dhaba',
									uuid: '736490d2-6a29-44fc-a84f-9fd33309b838',
									city: '24',
									area: 'Rajendra Nagar',
									totalRatingsString: '500+ ratings',
									cloudinaryImageId: 'rsqhjipggypuvyhlb36v',
									cuisines: ['North Indian', 'Mughlai', 'Tandoor', 'Indian'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 26,
									minDeliveryTime: 26,
									maxDeliveryTime: 26,
									slaString: '26 MINS',
									lastMileTravel: 2,
									slugs: {
										restaurant: 'kadak-singh-da-dhaba-sahibabad-sahibabad-2',
										city: 'noida'
									},
									cityState: '24',
									address:
										'Shop no 1, Plot 6/81, Krishna Kunj Apartments, Sec 2, Rajendra Nagar, Ghaziabad, UP- 201005',
									locality: 'Sector 2',
									parentId: 13170,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '50% off',
										shortDescriptionList: [
											{
												meta: '50% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '50% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									ribbon: [{ type: 'PROMOTED' }],
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=5804873~p=4~eid=00000186-8eb6-729a-3d40-4c8500990471',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '461173',
										deliveryTime: 26,
										minDeliveryTime: 26,
										maxDeliveryTime: 26,
										lastMileTravel: 2,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: true,
									avgRating: '4.0',
									totalRatings: 500,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '122290',
									name: 'New Aapki Rasoi',
									uuid: 'ede44b70-6627-446a-bc18-bdb53bd196c0',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '500+ ratings',
									cloudinaryImageId: 'mh2jswribewqjcqrtpsn',
									cuisines: ['North Indian'],
									tags: [],
									costForTwo: 20000,
									costForTwoString: '₹200 FOR TWO',
									deliveryTime: 26,
									minDeliveryTime: 26,
									maxDeliveryTime: 26,
									slaString: '26 MINS',
									lastMileTravel: 1.2000000476837158,
									slugs: {
										restaurant: 'new-aapki-rasoi-na-sector-14',
										city: 'noida'
									},
									cityState: '24',
									address:
										'shop no. 3 plot no. 9,shalimar Garden, Gaziabad,uttar Pradesh -201005',
									locality: 'Rajendra Nagar',
									parentId: 145669,
									unserviceable: false,
									veg: true,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '10% off',
										shortDescriptionList: [
											{
												meta: '10% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '10% off up to ₹40 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '10% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '10% off up to ₹40 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '122290',
										deliveryTime: 26,
										minDeliveryTime: 26,
										maxDeliveryTime: 26,
										lastMileTravel: 1.2000000476837158,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '4.0',
									totalRatings: 500,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '220392',
									name: 'Baba Dhaba',
									uuid: '0622c9bc-2722-4d16-b6a9-b519d52bbb68',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'ajmup4tsiw4epk1ltao4',
									cuisines: ['North Indian', 'Indian', 'Tandoor'],
									tags: [],
									costForTwo: 20000,
									costForTwoString: '₹200 FOR TWO',
									deliveryTime: 29,
									minDeliveryTime: 29,
									maxDeliveryTime: 29,
									slaString: '29 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant: 'baba-dhaba-sahibabad-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'WAZIRABAD ROAD BHOPURA NEAR BHARAT PETROLPUMP 201005 ,Bhopura,Ghaziabad Nagar Nigam Zone-1,Ghaziabad,Uttar Pradesh-201005',
									locality: 'Vikram Enclave',
									parentId: 38813,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '50% off',
										shortDescriptionList: [
											{
												meta: '50% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '50% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '220392',
										deliveryTime: 29,
										minDeliveryTime: 29,
										maxDeliveryTime: 29,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.2',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '167079',
									name: 'Nazeer Foods',
									uuid: 'effe257f-23f2-416f-b6b5-59102d6a71b8',
									city: '24',
									area: 'Rajendra Nagar',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'mdvuijcwn7ouygw3uapf',
									cuisines: ['North Indian', 'Biryani', 'Mughlai', 'Snacks'],
									tags: [],
									costForTwo: 40000,
									costForTwoString: '₹400 FOR TWO',
									deliveryTime: 25,
									minDeliveryTime: 25,
									maxDeliveryTime: 25,
									slaString: '25 MINS',
									lastMileTravel: 1.7999999523162842,
									slugs: {
										restaurant: 'nazeer-foods-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'K NO 3713, WAZIRABAD ROAD, PASONDA, SAHIBABAD, Ghaziabad, Uttar Pradesh-201005',
									locality: 'Wazirabad Road\n',
									parentId: 2351,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FREE DELIVERY',
										shortDescriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '',
										shortDescriptionList: [
											{
												meta: 'Free Delivery',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									ribbon: [{ type: 'PROMOTED' }],
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=5992964~p=7~eid=00000186-8eb6-729a-3d40-4c8600990723',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.7 kms',
									hasSurge: false,
									sla: {
										restaurantId: '167079',
										deliveryTime: 25,
										minDeliveryTime: 25,
										maxDeliveryTime: 25,
										lastMileTravel: 1.7999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: true,
									avgRating: '4.0',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '10936',
									name: 'Rasoi',
									uuid: '0d73ed15-e422-497a-b872-81b8facfadc3',
									city: '4',
									area: 'Dilshad Gardens',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'qistneml9glbxy7q7gya',
									cuisines: ['North Indian', 'Chinese', 'Snacks'],
									tags: [],
									costForTwo: 35000,
									costForTwoString: '₹350 FOR TWO',
									deliveryTime: 24,
									minDeliveryTime: 24,
									maxDeliveryTime: 24,
									slaString: '24 MINS',
									lastMileTravel: 3,
									slugs: {
										restaurant:
											'rasoi-dilshad-garden-main-market-dilshad-gardens',
										city: 'delhi'
									},
									cityState: '4',
									address: 'L-35A, Main Market, Dilshad Garden',
									locality: 'L Block',
									parentId: 764,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '20% off',
										shortDescriptionList: [
											{
												meta: '20% off | Use PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '20% off | Use code PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '20% OFF',
										shortDescriptionList: [
											{
												meta: 'Use PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '20% off | Use code PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '3 kms',
									hasSurge: false,
									sla: {
										restaurantId: '10936',
										deliveryTime: 24,
										minDeliveryTime: 24,
										maxDeliveryTime: 24,
										lastMileTravel: 3,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.8',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '583435',
									name: 'K D Chicken Point',
									uuid: '9cb96deb-834f-44cc-baf6-218355322179',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: 'Too Few Ratings',
									cloudinaryImageId: 'qmz5gqcp7tq5uibtwium',
									cuisines: ['North Indian'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 33,
									minDeliveryTime: 33,
									maxDeliveryTime: 33,
									slaString: '33 MINS',
									lastMileTravel: 1.100000023841858,
									slugs: {
										restaurant: 'k-d-chicken-point-kaushambi-kaushambi',
										city: 'noida'
									},
									cityState: '24',
									address:
										'plot no 813 salimar garden Extn-1 sahibabad ghaziabad',
									locality: 'Jain Mandir Marg',
									parentId: 341424,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FREE DELIVERY',
										shortDescriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '',
										shortDescriptionList: [
											{
												meta: 'Free Delivery',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: 'Closes soon'
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.1 kms',
									hasSurge: false,
									sla: {
										restaurantId: '583435',
										deliveryTime: 33,
										minDeliveryTime: 33,
										maxDeliveryTime: 33,
										lastMileTravel: 1.100000023841858,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '--',
									totalRatings: 0,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '616389',
									name: 'Biryani Badshah',
									uuid: '7888b52d-8ff6-4775-a3c3-714623f921ef',
									city: '24',
									area: 'Sahibabad',
									totalRatingsString: '100+ ratings',
									cloudinaryImageId: 'vniefzh2tmmelrivkcuk',
									cuisines: ['Biryani', 'Mughlai', 'North Indian'],
									tags: [],
									costForTwo: 35000,
									costForTwoString: '₹350 FOR TWO',
									deliveryTime: 28,
									minDeliveryTime: 28,
									maxDeliveryTime: 28,
									slaString: '28 MINS',
									lastMileTravel: 3,
									slugs: {
										restaurant: 'biryani-badshah-kaushambi-kaushambi',
										city: 'noida'
									},
									cityState: '24',
									address:
										'Plot No. 4, Shop No.-2, Commercial Plot, Sector-5, Rajender Nagar,, Ghaziabad Nagar Nigam Zone-2, Ghaziabad, Uttar Pradesh-201005',
									locality: 'Sector 5',
									parentId: 10703,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FLAT125 off',
										shortDescriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '₹125 OFF',
										shortDescriptionList: [
											{
												meta: 'Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FLAT125 off | Use FLATDEAL',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									ribbon: [{ type: 'PROMOTED' }],
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=5994007~p=10~eid=00000186-8eb6-729a-3d40-4c8700990a4e',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '3 kms',
									hasSurge: false,
									sla: {
										restaurantId: '616389',
										deliveryTime: 28,
										minDeliveryTime: 28,
										maxDeliveryTime: 28,
										lastMileTravel: 3,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: true,
									avgRating: '4.3',
									totalRatings: 100,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '287014',
									name: 'SHYAM RASOI',
									uuid: 'ac052ccf-ea5e-44f0-8b84-c456814c1e76',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '100+ ratings',
									cloudinaryImageId: 'jnctvrgsskt4nu9j4ja7',
									cuisines: ['North Indian', 'Indian'],
									tags: [],
									costForTwo: 25000,
									costForTwoString: '₹250 FOR TWO',
									deliveryTime: 26,
									minDeliveryTime: 26,
									maxDeliveryTime: 26,
									slaString: '26 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant: 'baba-kitchen-sahibabad-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'WAZIRABAD ROAD BHOPURA NEAR BHARAT PETROLPUMP 201005, District - Ghaziabad, STATE - Uttar Pradesh',
									locality: 'Vikram Enclave',
									parentId: 187590,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '25% off',
										shortDescriptionList: [
											{
												meta: '25% off | Use PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '25% off | Use code PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '25% OFF',
										shortDescriptionList: [
											{
												meta: 'Use PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '25% off | Use code PARTY',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '287014',
										deliveryTime: 26,
										minDeliveryTime: 26,
										maxDeliveryTime: 26,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '2.7',
									totalRatings: 100,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '124529',
									name: 'Roms Pizza',
									uuid: '3c14be6e-9f8a-4d24-a921-ab758a843b02',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '1000+ ratings',
									cloudinaryImageId: 'gfxwf6m460pihnbmkq2z',
									cuisines: ['Pizzas'],
									tags: [],
									costForTwo: 50000,
									costForTwoString: '₹500 FOR TWO',
									deliveryTime: 24,
									minDeliveryTime: 24,
									maxDeliveryTime: 24,
									slaString: '24 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant: 'rom39s-pizza-sahibabad-2',
										city: 'noida'
									},
									cityState: '24',
									address:
										'C-4 SHalimar Garden, Ext-2, Near Gaur Plaza Chowk, Sahibabad, Ghaziabad',
									locality: 'Gaur Plaza',
									parentId: 12143,
									unserviceable: false,
									veg: true,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FREE DELIVERY',
										shortDescriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											},
											{
												meta: '₹50 off on all orders',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											},
											{
												meta: '₹50 off on all orders',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '₹50 OFF',
										shortDescriptionList: [
											{
												meta: 'Free Delivery',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											},
											{
												meta: '₹50 off on all orders',
												discountType: 'Flat',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '124529',
										deliveryTime: 24,
										minDeliveryTime: 24,
										maxDeliveryTime: 24,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.8',
									totalRatings: 1000,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '336684',
									name: 'Behrouz Biryani',
									uuid: 'd14b7d6d-ada5-4184-839d-683f7d41fabd',
									city: '24',
									area: 'Rajendra Nagar',
									totalRatingsString: '500+ ratings',
									cloudinaryImageId: 'xo6r7yigzqqwr7yaorla',
									cuisines: [
										'Biryani',
										'Mughlai',
										'Lucknowi',
										'Hyderabadi',
										'Kebabs',
										'North Indian',
										'Persian',
										'Desserts'
									],
									tags: [],
									costForTwo: 50000,
									costForTwoString: '₹500 FOR TWO',
									deliveryTime: 28,
									minDeliveryTime: 28,
									maxDeliveryTime: 28,
									slaString: '28 MINS',
									lastMileTravel: 3,
									slugs: {
										restaurant: 'behrouz-biryani-rajendra-nagar-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'Block B -107,108 Shani tower 1s floor Rajendra Nagar Ghaziabad UP 201005',
									locality: 'Block B',
									parentId: 1803,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: '50% off',
										shortDescriptionList: [
											{
												meta: '50% off | Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '50% OFF',
										shortDescriptionList: [
											{
												meta: 'Use TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: '50% off up to ₹100 | Use code TRYNEW',
												discountType: 'Percentage',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									ribbon: [{ type: 'PROMOTED' }],
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID:
										'cid=6004897~p=13~eid=00000186-8eb6-729a-3d40-4c8800990d31',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '3 kms',
									hasSurge: false,
									sla: {
										restaurantId: '336684',
										deliveryTime: 28,
										minDeliveryTime: 28,
										maxDeliveryTime: 28,
										lastMileTravel: 3,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: true,
									avgRating: '4.0',
									totalRatings: 500,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '270193',
									name: 'SOUTH INDIAN CORNER J & K WALE',
									uuid: '0d4cc82e-9f84-457d-9016-b0c4739c8f41',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '500+ ratings',
									cloudinaryImageId: 'oeuknboue7zv9rbmvqsf',
									cuisines: ['South Indian'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 23,
									minDeliveryTime: 23,
									maxDeliveryTime: 23,
									slaString: '23 MINS',
									lastMileTravel: 2,
									slugs: {
										restaurant:
											'south-indian-corner-j-&-k-wale-sahibabad-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'B 203 SHALIMAR GARDEN MAIN SAHIBABAD, GHAZIABAD, GHAZIABAD NAGAR NIGAM ZONE 1GHAZIABAD UP  201005',
									locality: 'Block B',
									parentId: 191375,
									unserviceable: false,
									veg: true,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FREE DELIVERY',
										shortDescriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '',
										shortDescriptionList: [
											{
												meta: 'Free Delivery',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '270193',
										deliveryTime: 23,
										minDeliveryTime: 23,
										maxDeliveryTime: 23,
										lastMileTravel: 2,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.5',
									totalRatings: 500,
									new: false
								},
								subtype: 'basic'
							},
							{
								type: 'restaurant',
								data: {
									type: 'F',
									id: '451140',
									name: 'Namaste India 1996',
									uuid: '2f5ecd84-3915-4230-a87a-eba391432b7a',
									city: '24',
									area: 'Shalimar Garden',
									totalRatingsString: '50+ ratings',
									cloudinaryImageId: 'bdokxo9xnqhorvoiou2i',
									cuisines: ['North Indian'],
									tags: [],
									costForTwo: 30000,
									costForTwoString: '₹300 FOR TWO',
									deliveryTime: 30,
									minDeliveryTime: 30,
									maxDeliveryTime: 30,
									slaString: '30 MINS',
									lastMileTravel: 1.2999999523162842,
									slugs: {
										restaurant: 'namaste-india-1996-sahibabad-sahibabad',
										city: 'noida'
									},
									cityState: '24',
									address:
										'B-1/ 54 G-4 DLF Dilshad Ext II,  Bhopura, Ghaziabad  201005',
									locality: 'Vivekanand Marg',
									parentId: 271186,
									unserviceable: false,
									veg: false,
									select: false,
									favorite: false,
									tradeCampaignHeaders: [],
									aggregatedDiscountInfo: {
										header: 'FREE DELIVERY',
										shortDescriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									aggregatedDiscountInfoV2: {
										header: '60% OFF',
										shortDescriptionList: [
											{
												meta: 'Free Delivery',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										descriptionList: [
											{
												meta: 'FREE DELIVERY',
												discountType: 'FREE_DELIVERY',
												operationType: 'RESTAURANT'
											}
										],
										subHeader: '',
										headerType: 0,
										superFreedel: ''
									},
									chain: [],
									feeDetails: {
										fees: [],
										totalFees: 0,
										message: '',
										title: '',
										amount: '',
										icon: ''
									},
									availability: {
										opened: true,
										nextOpenMessage: '',
										nextCloseMessage: ''
									},
									longDistanceEnabled: 0,
									rainMode: 'NONE',
									thirdPartyAddress: false,
									thirdPartyVendor: '',
									adTrackingID: '',
									badges: {
										imageBased: [],
										textBased: [],
										textExtendedBadges: []
									},
									lastMileTravelString: '1.2 kms',
									hasSurge: false,
									sla: {
										restaurantId: '451140',
										deliveryTime: 30,
										minDeliveryTime: 30,
										maxDeliveryTime: 30,
										lastMileTravel: 1.2999999523162842,
										lastMileDistance: 0,
										serviceability: 'SERVICEABLE',
										rainMode: 'NONE',
										longDistance: 'NOT_LONG_DISTANCE',
										preferentialService: false,
										iconType: 'EMPTY'
									},
									promoted: false,
									avgRating: '3.5',
									totalRatings: 50,
									new: false
								},
								subtype: 'basic'
							}
						],
						totalRestaurants: 942
					},
					subtype: 'personalized'
				},
				parentWidget: false
			}
		],
		nextPageFetch: 0
	},
	tid: '7181598c-cb15-465e-8309-38686b644a3f',
	sid: '5mm2540a-6eab-45d7-b7ff-062a6fae8456',
	deviceId: '0fd8f986-9615-8e65-db21-39d54bd9a960',
	csrfToken: '6IvL9NhZFmZy-i24rgh45hPbfozAYn208t4h9cmg'
};

export const MENU_DATA = {
	statusCode: 0,
	data: {
		experiments: [{ experimentId: 'menu_via_timeline', variantId: 'true' }],
		restaurantAttributes: [],
		id: '288883',
		name: 'Baba Hotel',
		uuid: 'ce1c1176-30cc-4067-96b3-73bcccd6c7ff',
		slug: 'baba-hotel-sahibabad-sahibabad',
		latLong: '28.695295,77.336426',
		city: 'Noida',
		area: 'Shalimar Garden',
		areaPostalCode: '0',
		areaSlug: 'kaushambi',
		restaurantSlug: {
			restaurant: 'baba-hotel-sahibabad-sahibabad',
			city: 'noida'
		},
		type: 'F',
		locality: 'Vivekanand Marg',
		avgRating: 3.3,
		totalRatings: 1000,
		avgRatingString: '3.3',
		totalRatingsString: '1K+ ratings',
		cloudinaryImageId: 'qeqwquacqgvpieid3wyk',
		costForTwo: 25000,
		costForTwoMsg: '₹250 for two',
		cuisines: ['Indian', 'North Indian'],
		minimumOrder: 0,
		opened: 1,
		parentId: 14203,
		isNew: false,
		isVeg: false,
		favorite: false,
		multiOutlet: false,
		restaurantServiceLine: ['REGULAR'],
		sla: {
			slaString: '28 MINS',
			lastMileDistanceString: '1.3 kms',
			restaurantId: '288883',
			deliveryTime: 28,
			minDeliveryTime: 28,
			maxDeliveryTime: 28,
			lastMileTravel: 1.3,
			thirtyMinOrFree: false,
			serviceability: 'SERVICEABLE',
			stressFactor: 0.9221814274787903,
			rainMode: 'NONE',
			longDistance: 'NOT_LONG_DISTANCE',
			preferentialService: false,
			batchable: false,
			stress: {
				value: 0.3333333432674408,
				components: { de: 0.3333333432674408 }
			},
			surge: { applicable: false, components: [{ value: 0, type: 'STRESS' }] },
			zoneId: 3205
		},
		availability: {
			nextCloseTime: '2023-02-28 05:30:00',
			nextChangeTime: 1677542400000,
			visibility: true,
			opened: true
		},
		badges: { imageBased: [], textBased: [], textExtendedBadges: [] },
		labels: [
			{ title: 'Timings', message: 'null' },
			{
				title: 'Address',
				message:
					'WAZIRABAD ROAD BHOPURA NEAR BHARAT PETROLPUMP 201005, District - Ghaziabad, STATE - Uttar Pradesh'
			},
			{ title: 'Cuisines', message: 'Indian,North Indian' }
		],
		thirdPartyAddress: false,
		menu: {
			items: {
				56060277: {
					id: 56060277,
					name: 'Shahi Paneer',
					category: 'Main Course',
					description:
						'Cottage cheese cubes cooked with tomato and cashew nut gravy.',
					cloudinaryImageId: 'cculssidys8uiz0l4qyu',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 15500,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681270',
								name: 'Quantity',
								variations: [
									{
										name: 'Half (300ml)',
										price: 0,
										default: 0,
										id: '28874915',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681270',
										order: 997
									},
									{
										name: 'Full (500ml)',
										price: 8000,
										default: 1,
										id: '28874916',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681270',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060278: {
					id: 56060278,
					name: 'Kadai Paneer',
					category: 'Main Course',
					description:
						'Cottage cheese sautes with onion, tomato, capsicum and house special kadai paneer masala.',
					cloudinaryImageId: 'diqw3i8eukmtmyfcl2tq',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 16900,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681271',
								name: 'Quantity',
								variations: [
									{
										name: 'Half (300ml)',
										price: 0,
										default: 1,
										id: '28874917',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681271',
										order: 997
									},
									{
										name: 'Full (500ml)',
										price: 8000,
										default: 0,
										id: '28874918',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681271',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060279: {
					id: 56060279,
					name: 'Malai Gravy Chaap',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'uydr6dspeylju8g5qq4q',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681272',
								name: 'Quantity',
								variations: [
									{
										name: 'Half(serves 1)',
										price: 0,
										default: 1,
										id: '28874919',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681272',
										order: 997
									},
									{
										name: 'Full(serves 2)',
										price: 8000,
										default: 0,
										id: '28874920',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681272',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060280: {
					id: 56060280,
					name: 'Aloo Jeera Fry',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'gfut8q66nby8gibujsv3',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681276',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874927',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681276',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '28874928',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681276',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060281: {
					id: 56060281,
					name: 'Eggy Bhurji',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'x7e3u4iiiulunqlsmku0',
					recommended: 1,
					inStock: 1,
					isVeg: 0,
					enabled: 1,
					displayOrder: 0,
					price: 10000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681286',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874947',
										inStock: 1,
										isVeg: 0,
										variant_group_id: '8681286',
										order: 999
									},
									{
										name: 'Full',
										price: 6000,
										default: 0,
										id: '28874948',
										inStock: 1,
										isVeg: 0,
										variant_group_id: '8681286',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'EGG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060282: {
					id: 56060282,
					name: 'Dahi',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 6000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282980',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550628',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282980',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550629',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282980',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060283: {
					id: 56060283,
					name: 'Dahi Fry',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 8000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282981',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550630',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282981',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550631',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282981',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060285: {
					id: 56060285,
					name: 'Aloo Raita',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 6000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282983',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550634',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282983',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550635',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282983',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060286: {
					id: 56060286,
					name: 'Jeera Raita',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 6000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282984',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550636',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282984',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550637',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282984',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060289: {
					id: 56060289,
					name: 'Tandoori Roti',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'fzhvgvunaqwejnqcdume',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 800,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060290: {
					id: 56060290,
					name: 'Tandoori Butter Roti (1 Pc)  ',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'dmhjhwpzuhvgafkkkoea',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 1000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060291: {
					id: 56060291,
					name: 'Missi Butter Roti',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'hbqeps7d2fjipnqi0tm0',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 2500,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060292: {
					id: 56060292,
					name: 'Laccha Parantha',
					category: 'Tandoorese',
					description: '(Serves 1)',
					cloudinaryImageId: 'lj4d71ywpudeuddd4mjf',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 3500,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060293: {
					id: 56060293,
					name: 'Pudina Parantha',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060294: {
					id: 56060294,
					name: 'Paneer Parantha',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'qrcb9391bxl9ckjazxih',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060297: {
					id: 56060297,
					name: 'Mix Paratha',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060299: {
					id: 56060299,
					name: 'Butter Naan (3 pcs)',
					category: 'Tandoorese',
					description: '(Serves 1)',
					cloudinaryImageId: 'ywge5ghljfrk0vcwv6lt',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 4000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060300: {
					id: 56060300,
					name: 'Paneer Naan',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'bm7e0076lnliogcec7df',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060302: {
					id: 56060302,
					name: 'Plain Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 6000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282987',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550642',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282987',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550643',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282987',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060303: {
					id: 56060303,
					name: 'Jeera Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: 'kcyx2b5xxyiek8n4yfdr',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 6000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282988',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550644',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282988',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '24550645',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282988',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060304: {
					id: 56060304,
					name: 'Rajma Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: 'zfbqhrdpcckwglyr6clr',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 9000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282989',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550646',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282989',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '24550647',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282989',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060305: {
					id: 56060305,
					name: 'Chole Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 9000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282990',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550648',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282990',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '24550649',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282990',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060306: {
					id: 56060306,
					name: 'Dal Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: 'tcz8sd9mnd3c9gwbw5kp',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 9000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282991',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550650',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282991',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '24550651',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282991',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060307: {
					id: 56060307,
					name: 'Kadi Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: 'iphwdsvbmqbugd29jnib',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 9000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282992',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550652',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282992',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '24550653',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282992',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				56060308: {
					id: 56060308,
					name: 'Matar Paneer Fry Rice',
					category: 'Rices',
					description: '',
					cloudinaryImageId: 'vyv7run3bmbfe7vc2lim',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 12000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '7282993',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '24550654',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282993',
										order: 999
									},
									{
										name: 'Full',
										price: 7000,
										default: 0,
										id: '24550655',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '7282993',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971975: {
					id: 62971975,
					name: 'Dal Makhani',
					category: 'Main Course',
					description:
						'(less spicy) black lentic delicacy prepared with onion and tomato gravy, cream and butter.',
					cloudinaryImageId: 'dst2xcx71hmkagw7b8nz',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14900,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681268',
								name: 'Quantity',
								variations: [
									{
										name: 'Half(serves 1)',
										price: 0,
										default: 1,
										id: '28874911',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681268',
										order: 997
									},
									{
										name: 'Full(serves 2)',
										price: 8000,
										default: 0,
										id: '28874912',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681268',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971976: {
					id: 62971976,
					name: 'Dal Fry',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'ekbw0khoxd7bsoslgso2',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681269',
								name: 'Quantity',
								variations: [
									{
										name: 'Half(serves 1)',
										price: 0,
										default: 1,
										id: '28874913',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681269',
										order: 997
									},
									{
										name: 'Full(serves 2)',
										price: 5000,
										default: 0,
										id: '28874914',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681269',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971977: {
					id: 62971977,
					name: 'Masala Gravy Chaap',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 12000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681273',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874921',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681273',
										order: 999
									},
									{
										name: 'Full',
										price: 8000,
										default: 0,
										id: '28874922',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681273',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971978: {
					id: 62971978,
					name: 'Mattar Paneer',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: '7eec8bdb56d0f138e196b240f009c674',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 12000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681274',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874923',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681274',
										order: 999
									},
									{
										name: 'Full',
										price: 8000,
										default: 0,
										id: '28874924',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681274',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971979: {
					id: 62971979,
					name: 'Paneer Bhurji',
					category: 'Main Course',
					description:
						'A delightfully wholesome combo with mouthwatering paneer bhurji; served with Maska Pav.',
					cloudinaryImageId: 'zwjkga49b41veh0e6b6h',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 18000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681275',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874925',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681275',
										order: 999
									},
									{
										name: 'Full',
										price: 8000,
										default: 0,
										id: '28874926',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681275',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971980: {
					id: 62971980,
					name: 'Rajma Masala',
					category: 'Main Course',
					description:
						'A tasty and savory gravy made from cooking kidney beans in a flavorful gravy, seasoned with Indian spices.',
					cloudinaryImageId: 'hmecxqjx0bqmtr3equbx',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681277',
								name: 'Quantity',
								variations: [
									{
										name: 'Half(serves 1)',
										price: 0,
										default: 1,
										id: '28874929',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681277',
										order: 997
									},
									{
										name: 'Full(serves 2)',
										price: 5000,
										default: 0,
										id: '28874930',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681277',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971981: {
					id: 62971981,
					name: 'Kadi Pakoda',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'rmju6lfrq42yhyea6scy',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681278',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874931',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681278',
										order: 999
									},
									{
										name: 'Full',
										price: 4500,
										default: 0,
										id: '28874932',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681278',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971983: {
					id: 62971983,
					name: 'Chole Masala',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681280',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874935',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681280',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '28874936',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681280',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971985: {
					id: 62971985,
					name: 'Palak Paneer',
					category: 'Main Course',
					description:
						'Cottage cheese simmered in delicately spiced creamed fresh spinach.',
					cloudinaryImageId: 'jpu1xiei9lghjx3xcaq4',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681282',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874939',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681282',
										order: 999
									},
									{
										name: 'Full',
										price: 8000,
										default: 0,
										id: '28874940',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681282',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971986: {
					id: 62971986,
					name: 'Mix Vegetables',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'aohhrhvsml7ku6zxlpmy',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681283',
								name: 'Quantity',
								variations: [
									{
										name: 'Half(serves 1)',
										price: 0,
										default: 1,
										id: '28874941',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681283',
										order: 997
									},
									{
										name: 'Full(serves 2)',
										price: 8000,
										default: 0,
										id: '28874942',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681283',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971987: {
					id: 62971987,
					name: 'Chana Masala',
					category: 'Main Course',
					description:
						'A tasty and savory gravy made from cooking chickepeas in a flavorful gravy, seasoned with Indian spices.',
					cloudinaryImageId: 'chjgh6bvpbnjvwq17ocb',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681284',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874943',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681284',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '28874944',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '8681284',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				62971988: {
					id: 62971988,
					name: 'Egg Curry',
					category: 'Main Course',
					description:
						'Egg Curry is a popular flavourful dish made with boiled eggs cooked in rich onion tomato gravy.',
					cloudinaryImageId: 'isee9xckgghk5ykcmmdk',
					recommended: 1,
					inStock: 1,
					isVeg: 0,
					enabled: 1,
					displayOrder: 0,
					price: 10000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '8681285',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '28874945',
										inStock: 1,
										isVeg: 0,
										variant_group_id: '8681285',
										order: 999
									},
									{
										name: 'Full',
										price: 6000,
										default: 0,
										id: '28874946',
										inStock: 1,
										isVeg: 0,
										variant_group_id: '8681285',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'EGG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459293: {
					id: 67459293,
					name: 'Eggy Curry Rice Bowl',
					category: 'Rice Combo',
					description:
						'Authentic eggy curry and flavoured rice served half and a half.',
					cloudinaryImageId: 'ranjmpznt6vvhfyzj0td',
					recommended: 1,
					inStock: 1,
					isVeg: 0,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'EGG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459294: {
					id: 67459294,
					name: 'Paneer Butter Masala And Paratha Bowl',
					category: 'Combo',
					description:
						'Soft cubes of paneer cooked in a flavour gravy, served with 2 laccha paratha.',
					cloudinaryImageId: 'zrxgvltsjb0vvxzbvrat',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459295: {
					id: 67459295,
					name: 'Dal Makhani And Paratha Bowl',
					category: 'Combo',
					description: 'Authentic dal makhani served with 2 laccha paratha.',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459296: {
					id: 67459296,
					name: 'Eggy Masala And Paratha Bowl',
					category: 'Combo',
					description:
						'A simple culinary delight, hard-boiled eggs cooked in a luscious gravy flavoured with indian spices and aromatics, served with 2 laccha paratha.',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 0,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'EGG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459297: {
					id: 67459297,
					name: 'Kadai Paneer Combo',
					category: 'Combo',
					description: 'Kadai paneer and served with 2 butter naan.',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459298: {
					id: 67459298,
					name: 'Dal Tadka Yellow',
					category: 'Main Course',
					description:
						'(medium spicy) yellow lentil cooked with hing, garlic, ginger and onions.',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 10000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '9620323',
								name: 'Quantity',
								variations: [
									{
										name: 'Half (300ml)',
										price: 0,
										default: 1,
										id: '31746310',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620323',
										order: 997
									},
									{
										name: 'Full (500ml)',
										price: 6000,
										default: 0,
										id: '31746311',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620323',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459299: {
					id: 67459299,
					name: 'Paneer Butter Masala',
					category: 'Main Course',
					description:
						'Cottage cheese cubes cooked with tomato gravy finished with fresh cream and butter.',
					cloudinaryImageId: 'p1j1vzagkuk8qfbq9wdc',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 15000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '9620324',
								name: 'Quantity',
								variations: [
									{
										name: 'Half (300ml)',
										price: 0,
										default: 1,
										id: '31746312',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620324',
										order: 997
									},
									{
										name: 'Full (500ml)',
										price: 8000,
										default: 0,
										id: '31746313',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620324',
										order: 996
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459300: {
					id: 67459300,
					name: 'Aloo Gobi Fry',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: 'nppvr784kcoj50fklavu',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '9620325',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '31746314',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620325',
										order: 999
									},
									{
										name: 'Full',
										price: 5000,
										default: 0,
										id: '31746315',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620325',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459301: {
					id: 67459301,
					name: 'Tawa Roti',
					category: 'Tandoorese',
					description: 'Serve 1',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 1200,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459302: {
					id: 67459302,
					name: 'Tawa Butter Roti',
					category: 'Tandoorese',
					description: '(Serves 1)',
					cloudinaryImageId: 'wlpsrgh8l3piqmp9g2wp',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 1400,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459303: {
					id: 67459303,
					name: 'Aloo Paratha',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: 'skhlwac44khv43xovxuv',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 4000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 12 noon, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459304: {
					id: 67459304,
					name: 'Aloo Pyaza Paratha',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 4000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459305: {
					id: 67459305,
					name: 'Aloo Naan',
					category: 'Tandoorese',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459306: {
					id: 67459306,
					name: 'Sweet Lassi',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 8000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '9620326',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '31746316',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620326',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '31746317',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620326',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459307: {
					id: 67459307,
					name: 'Green Salad',
					category: 'Accompaniments',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: {
						exclude_list: [],
						variant_groups: [
							{
								group_id: '9620327',
								name: 'Quantity',
								variations: [
									{
										name: 'Half',
										price: 0,
										default: 1,
										id: '31746318',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620327',
										order: 999
									},
									{
										name: 'Full',
										price: 4000,
										default: 0,
										id: '31746319',
										inStock: 1,
										isVeg: 1,
										variant_group_id: '9620327',
										order: 998
									}
								]
							}
						]
					},
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459308: {
					id: 67459308,
					name: 'Dal Makhani Rice Bowl',
					category: 'Rice Combo',
					description:
						'Authentic dal makhani and flavoured rice served half and a half.',
					cloudinaryImageId: 'pnhxjeneohofuj9sow27',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459309: {
					id: 67459309,
					name: 'Shahi Paneer Rice Bowl',
					category: 'Rice Combo',
					description:
						'Authentic shai paneer and flavoured rice served half and a half.',
					cloudinaryImageId: 'vicjfsuukj8dem9tpq2u',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				67459310: {
					id: 67459310,
					name: 'Paneer Butter Masala Rice',
					category: 'Rice Combo',
					description:
						'Authentic paneer butter masala and flavoured rice served half and a half.',
					cloudinaryImageId: 'yycsskicx9kz2fhsqdts',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				82181818: {
					id: 82181818,
					name: 'Special Chana Masala',
					category: 'Main Course',
					description: '',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				82184570: {
					id: 82184570,
					name: 'Plain Thali',
					category: 'Thalis',
					description:
						'Dal makhani + shai paneer + rice + salad + tandoori butter roti = laccha parantha',
					cloudinaryImageId: '',
					recommended: 0,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				82185248: {
					id: 82185248,
					name: 'Baba Special Thali',
					category: 'Thalis',
					description:
						'Served with dal makhani, paneer butter masala, mix veg, rice, butter naan, laccha parantha\n',
					cloudinaryImageId: 'j1tybiv7tnwzhfbxkwyu',
					recommended: 1,
					inStock: 1,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 24900,
					variants_new: { exclude_list: [], variant_groups: [] },
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					ribbon: {
						text: 'Bestseller',
						textColor: '#ffffff',
						topBackgroundColor: '#d53d4c',
						bottomBackgroundColor: '#b02331'
					},
					attributes: {
						portionSize: '',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: true,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553075: {
					id: 102553075,
					name: 'Shahi Paneer      ',
					category: 'Breakfast Specials',
					description:
						'Cottage cheese cubes cooked with tomato and cashew nut gravy.',
					cloudinaryImageId: 'jxt2omx3ukcx0uorsezk',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 15500,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553079: {
					id: 102553079,
					name: 'Kadai Paneer      ',
					category: 'Breakfast Specials',
					description:
						'Cottage cheese sautes with onion, tomato, capsicum and house special kadai paneer masala.',
					cloudinaryImageId: 'wsnakx7omdtion0fddml',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 16900,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 9 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553082: {
					id: 102553082,
					name: 'Malai Gravy Chaap      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'uydr6dspeylju8g5qq4q',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 10 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553086: {
					id: 102553086,
					name: 'Aloo Jeera Fry      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'gfut8q66nby8gibujsv3',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 6 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553089: {
					id: 102553089,
					name: 'Paneer Parantha      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'qrcb9391bxl9ckjazxih',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 6 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553092: {
					id: 102553092,
					name: 'Rajma Rice      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'zfbqhrdpcckwglyr6clr',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 9000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 9 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553094: {
					id: 102553094,
					name: 'Dal Makhani      ',
					category: 'Breakfast Specials',
					description:
						'(less spicy) black lentic delicacy prepared with onion and tomato gravy, cream and butter.',
					cloudinaryImageId: 'sflk6kcpqtcuxcthxcmi',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14900,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 11:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553097: {
					id: 102553097,
					name: 'Dal Fry      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'ekbw0khoxd7bsoslgso2',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 11:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553099: {
					id: 102553099,
					name: 'Mattar Paneer      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'txanft45za5k2qxlivok',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 12000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 9:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553103: {
					id: 102553103,
					name: 'Rajma Masala      ',
					category: 'Breakfast Specials',
					description:
						'A tasty and savory gravy made from cooking kidney beans in a flavorful gravy, seasoned with Indian spices.',
					cloudinaryImageId: 'hmecxqjx0bqmtr3equbx',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 9:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553106: {
					id: 102553106,
					name: 'Kadi Pakoda      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'rmju6lfrq42yhyea6scy',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 7 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553108: {
					id: 102553108,
					name: 'Palak Paneer      ',
					category: 'Breakfast Specials',
					description:
						'Cottage cheese simmered in delicately spiced creamed fresh spinach.',
					cloudinaryImageId: 'jpu1xiei9lghjx3xcaq4',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553112: {
					id: 102553112,
					name: 'Mix Vegetables      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'aohhrhvsml7ku6zxlpmy',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 14000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553114: {
					id: 102553114,
					name: 'Chana Masala      ',
					category: 'Breakfast Specials',
					description:
						'A tasty and savory gravy made from cooking chickepeas in a flavorful gravy, seasoned with Indian spices.',
					cloudinaryImageId: 'chjgh6bvpbnjvwq17ocb',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 7 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553117: {
					id: 102553117,
					name: 'Egg Curry      ',
					category: 'Breakfast Specials',
					description:
						'Egg Curry is a popular flavourful dish made with boiled eggs cooked in rich onion tomato gravy.',
					cloudinaryImageId: 'woo3n7iynnioxdf9uyg5',
					recommended: 1,
					inStock: 0,
					isVeg: 0,
					enabled: 1,
					displayOrder: 0,
					price: 10000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 11:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'EGG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553120: {
					id: 102553120,
					name: 'Paneer Butter Masala And Paratha Bowl      ',
					category: 'Breakfast Specials',
					description:
						'Soft cubes of paneer cooked in a flavour gravy, served with 2 laccha paratha.',
					cloudinaryImageId: 'zrxgvltsjb0vvxzbvrat',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553125: {
					id: 102553125,
					name: 'Paneer Butter Masala      ',
					category: 'Breakfast Specials',
					description:
						'Cottage cheese cubes cooked with tomato gravy finished with fresh cream and butter.',
					cloudinaryImageId: 'j17nefljabqdeuixin2t',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 15000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 9:28 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553127: {
					id: 102553127,
					name: 'Aloo Gobi Fry      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'nppvr784kcoj50fklavu',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 7000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 8:30 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553131: {
					id: 102553131,
					name: 'Aloo Paratha      ',
					category: 'Breakfast Specials',
					description: '',
					cloudinaryImageId: 'skhlwac44khv43xovxuv',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 4000,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 7:45 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				},
				102553133: {
					id: 102553133,
					name: 'Dal Makhani Rice Bowl      ',
					category: 'Breakfast Specials',
					description:
						'Authentic dal makhani and flavoured rice served half and a half.',
					cloudinaryImageId: 'pnhxjeneohofuj9sow27',
					recommended: 1,
					inStock: 0,
					isVeg: 1,
					enabled: 1,
					displayOrder: 0,
					price: 19900,
					variants_new: { exclude_list: [], variant_groups: [] },
					nextAvailableAtMessage: 'Next available at 7:45 am, today',
					cropChoices: 2,
					itemScore: 0,
					itemDiscount: 0,
					isPopular: 0,
					restId: '288883',
					showMC: 0,
					attributes: {
						portionSize: 'Serves 1',
						vegClassifier: 'VEG',
						accompaniments: ''
					},
					isHealthy: false,
					isBestSeller: false,
					itemNudgeType: '',
					isGuiltFree: false
				}
			},
			widgets: [
				{
					name: 'Recommended',
					subTitle: '',
					type: 'recommended',
					entities: [
						{ id: 62971975, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971985, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459299, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060278, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060277, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971978, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971976, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971981, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971980, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060279, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971987, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971986, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459300, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060280, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971988, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060281, type: 'item', showImg: true, showRibbon: false },
						{ id: 62971979, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060294, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060299, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060289, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459302, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060292, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060300, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060291, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459294, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459308, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459309, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459293, type: 'item', showImg: true, showRibbon: false },
						{ id: 67459310, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060303, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060304, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060307, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060306, type: 'item', showImg: true, showRibbon: false },
						{ id: 56060308, type: 'item', showImg: true, showRibbon: false },
						{ id: 82185248, type: 'item', showImg: true, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Accompaniments',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 56060286, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459306, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060282, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459307, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060285, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060283, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Main Course',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 62971975, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971985, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459299, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060278, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060277, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971977, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971978, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971976, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971981, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971980, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060279, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971987, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459298, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971986, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459300, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060280, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971988, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060281, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971983, type: 'item', showImg: false, showRibbon: false },
						{ id: 62971979, type: 'item', showImg: false, showRibbon: false },
						{ id: 82181818, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Tandoorese',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 56060294, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060299, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060289, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459304, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459301, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060290, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459302, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060292, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060300, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060291, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459305, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060297, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060293, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459303, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Combo',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 67459294, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459297, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459295, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459296, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Rice Combo',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 67459308, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459309, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459293, type: 'item', showImg: false, showRibbon: false },
						{ id: 67459310, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Rices',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 56060303, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060304, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060307, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060306, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060302, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060305, type: 'item', showImg: false, showRibbon: false },
						{ id: 56060308, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Thalis',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 82185248, type: 'item', showImg: false, showRibbon: false },
						{ id: 82184570, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				},
				{
					name: 'Breakfast Specials',
					subTitle: '',
					type: 'category',
					entities: [
						{ id: 102553075, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553089, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553131, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553092, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553079, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553106, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553103, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553082, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553086, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553117, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553094, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553097, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553099, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553127, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553108, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553133, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553112, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553114, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553120, type: 'item', showImg: false, showRibbon: false },
						{ id: 102553125, type: 'item', showImg: false, showRibbon: false }
					],
					perRow: 2,
					collapsible: false
				}
			],
			layoutType: 'normal',
			healthyCollection: []
		},
		aggregatedDiscountInfo: {
			header: '50% off',
			shortDescriptionList: [
				{
					meta: '50% off | Use TRYNEW',
					discountType: 'Percentage',
					operationType: 'RESTAURANT'
				},
				{
					meta: 'FLAT150 off | Use FLATDEAL',
					discountType: 'Flat',
					operationType: 'RESTAURANT'
				}
			],
			descriptionList: [
				{
					meta: '50% off up to ₹100 | Use code TRYNEW',
					discountType: 'Percentage',
					operationType: 'RESTAURANT'
				},
				{
					meta: 'FLAT150 off | Use FLATDEAL',
					discountType: 'Flat',
					operationType: 'RESTAURANT'
				}
			]
		},
		offerMeta: [
			{
				header: '50% OFF UPTO ₹100',
				offer_tag: '',
				offer_logo: 'offers/generic',
				top_logo: '',
				bottom_logo: '',
				offer_info: {
					offer_ids: ['2ba2d4d8-0a2f-4bf8-b1ed-bef9b7af211a'],
					type: 'offers'
				},
				expiry_time: 0,
				coupon_code: 'USE TRYNEW',
				description: 'ABOVE ₹159',
				secondary_discount_callout: '',
				show_expiry_timer: false
			},
			{
				header: 'FLAT ₹150 OFF',
				offer_tag: 'FLAT DEAL',
				offer_logo: 'offers/generic',
				top_logo: '',
				bottom_logo: '',
				offer_info: {
					offer_ids: ['0c58144c-c499-4aee-870e-8da0329072d7'],
					type: 'offers'
				},
				expiry_time: 0,
				coupon_code: 'USE FLATDEAL',
				description: 'ABOVE ₹749',
				secondary_discount_callout: '',
				show_expiry_timer: false
			},
			{
				header: 'FLAT 20% OFF',
				offer_tag: 'FLAT DEAL',
				offer_logo: 'offers/generic',
				top_logo: '',
				bottom_logo: '',
				offer_info: {
					offer_ids: ['a077825a-e67b-47f8-bd71-0d80b085c79d'],
					type: 'offers'
				},
				expiry_time: 0,
				coupon_code: 'USE PARTY',
				description: 'ABOVE ₹1000',
				secondary_discount_callout: '',
				show_expiry_timer: false
			},
			{
				header: '20% OFF UPTO ₹120',
				offer_tag: '',
				offer_logo: 'rng/md/ads/production/1acdb97aadcb61b323307845bda86535',
				top_logo: '',
				bottom_logo: 'rng/md/ads/production/1acdb97aadcb61b323307845bda86535',
				offer_info: {
					offer_ids: ['68d41a53-c297-48e9-b3e0-054e3fd05845'],
					type: 'offers'
				},
				expiry_time: 0,
				coupon_code: 'USE FEDERALCC',
				description: 'ABOVE ₹249',
				secondary_discount_callout: '',
				show_expiry_timer: false
			},
			{
				header: 'FLAT ₹100 OFF',
				offer_tag: '',
				offer_logo: 'rng/md/ads/production/3a937ddacd3adb70c4543c4895213123',
				top_logo: '',
				bottom_logo: 'rng/md/ads/production/3a937ddacd3adb70c4543c4895213123',
				offer_info: {
					offer_ids: ['db599105-a5bd-481a-988f-ede0670a6b16'],
					type: 'offers'
				},
				expiry_time: 0,
				coupon_code: 'USE AUDC100',
				description: 'ABOVE ₹299',
				secondary_discount_callout: '',
				show_expiry_timer: false
			}
		],
		itemNudgeBanners: {},
		aggregatedDiscountInfoV2: {
			header: '50% off',
			shortDescriptionList: [
				{
					meta: '50% off | Use TRYNEW',
					discountType: 'Percentage',
					operationType: 'RESTAURANT'
				},
				{
					meta: 'FLAT150 off | Use FLATDEAL',
					discountType: 'Flat',
					operationType: 'RESTAURANT'
				}
			],
			descriptionList: [
				{
					meta: '50% off up to ₹100 | Use code TRYNEW',
					discountType: 'Percentage',
					operationType: 'RESTAURANT'
				},
				{
					meta: 'FLAT150 off | Use FLATDEAL',
					discountType: 'Flat',
					operationType: 'RESTAURANT'
				}
			],
			couponDetailsCTAText: 'View coupon details',
			visible: false
		},
		nudgeBanners: [
			{
				minValue: 700,
				maxValue: 1000,
				priority: 3,
				couponCode: 'PARTY',
				discountInfo: {
					discountType: 'Percentage',
					value: 20,
					operationType: 'RESTAURANT'
				},
				lockedMessage:
					'Add items worth ₹<amount> to unlock flat 20% off | Code PARTY',
				unlockedMessage: 'PARTY Coupon Unlocked! Use it to save flat 20% off',
				minItemCount: 0,
				maxItemCount: 0,
				type: '',
				cta: { link: '', text: '', type: '', color: '' }
			},
			{
				minValue: 104.3,
				maxValue: 149,
				priority: 4,
				couponCode: '',
				discountInfo: {
					discountType: 'FREE_DELIVERY',
					value: 0,
					operationType: 'RESTAURANT'
				},
				lockedMessage: '',
				unlockedMessage: '',
				minItemCount: 0,
				maxItemCount: 0,
				type: '',
				cta: { link: '', text: '', type: '', color: '' }
			}
		],
		restaurantLicenses: [
			{
				type: 'FSSAI',
				imageId: 'fssai_final_edss9i',
				text: ['License No. 22719687000021']
			}
		],
		menuTabs: [{ title: 'Order Now', type: 'menu', selected: true }],
		vegOnlyDetails: {
			imageId: 'AutoVegOnly_qkjowj',
			title: 'Showing only vegetarian options.',
			description: 'Tap on the VEG ONLY button to turn off the setting'
		},
		gpInfoList: [],
		expectationNotifiers: [],
		menuCategory: [
			{
				name: 'Full Menu',
				identifier: 'REGULAR',
				icon: 'v1594205104/fullMenuActive_qcsdzt.png',
				unselectedIcon: 'v1594205107/fullMenuInactive_fbdtp2.png',
				selected: true
			}
		],
		xpConfigParams: { isNewHealthMenu: 'false' },
		cafe: false,
		preorderable: false,
		select: false,
		slotInvalid: false,
		requestId: 'cc82a564-6894-4832-8819-66146cb3bae8',
		timeStamp: '1677523654773'
	},
	tid: 'c892938e-b430-4bc6-af75-2a5ad28d8002',
	sid: '5ncb2cd5-4b5a-440d-8ed9-6a4bb645e0d0',
	deviceId: '3d2ad5a6-659e-da76-85e4-ce6b1969ef1a',
	csrfToken: 'vFbDmcGJTaqL--hrBqUCzaHsXYnLZOoq9Bns0K94'
};
