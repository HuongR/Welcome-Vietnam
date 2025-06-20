var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    // location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "star",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
  },
  state_specific: {
    VN01: {
      name: "Lai Chau",
      description:
        "Lai Châu là tỉnh miền núi cao phía Bắc, địa hình chủ yếu là núi cao trên 1000m.",
      color: "#c46458",
      hover_color: "#A1887F",
      url: "default",
    },
    VN02: {
      name: "Lào Cai",
      description:
        "Lào Cai có Sa Pa, đỉnh Fansipan, địa hình chủ yếu là núi cao trên 1000m.",
      color: "#c46458",
      hover_color: "#A1887F",
      url: "default",
    },
    VN03: {
      name: "Hà Giang",
      description:
        "Hà Giang nổi bật với cao nguyên đá Đồng Văn, địa hình núi cao trên 1000m.",
      color: "#c46458",
      hover_color: "#A1887F",
      url: "default",
    },
    VN04: {
      name: "Cao Bằng",
      description: "Cao Bằng có nhiều núi đá vôi, độ cao trung bình 200-1000m.",
      color: "#FF9800",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN05: {
      name: "Son La",
      description: "Sơn La có cao nguyên Mộc Châu, địa hình chủ yếu 500-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN06: {
      name: "Yên Bái",
      description:
        "Yên Bái có ruộng bậc thang Mù Cang Chải, địa hình trung du và núi 200-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN07: {
      name: "Tuyên Quang",
      description:
        "Tuyên Quang chủ yếu là đồi núi thấp, độ cao trung bình 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN09: {
      name: "Lạng Sơn",
      description: "Lạng Sơn có nhiều núi đá vôi, độ cao trung bình 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN13: {
      name: "Quảng Ninh",
      description:
        "Quảng Ninh có vùng núi Đông Bắc và vùng ven biển, độ cao đa dạng.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN14: {
      name: "Hòa Bình",
      description: "Hòa Bình là cửa ngõ Tây Bắc, địa hình đồi núi 200-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN18: {
      name: "Ninh Bình",
      description: "Ninh Bình chủ yếu là đồng bằng và núi thấp, dưới 200m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN20: {
      name: "Thái Bình",
      description: "Thái Bình là vùng đồng bằng châu thổ sông Hồng, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN21: {
      name: "Thanh Hóa",
      description:
        "Thanh Hóa có cả đồng bằng, đồi núi và ven biển, độ cao đa dạng.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN22: {
      name: "Nghệ An",
      description:
        "Nghệ An có vùng núi phía Tây và đồng bằng ven biển, độ cao đa dạng.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN23: {
      name: "Ha Tinh",
      description: "Hà Tĩnh chủ yếu là đồng bằng ven biển và đồi núi thấp.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN24: {
      name: "Quảng Bình",
      description:
        "Quảng Bình có dãy Trường Sơn và đồng bằng ven biển, độ cao đa dạng.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN25: {
      name: "Quảng Trị",
      description: "Quảng Trị có vùng núi phía Tây và đồng bằng ven biển.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN26: {
      name: "Thừa Thiên - Huế",
      description: "Thừa Thiên Huế có đồng bằng ven biển và núi thấp.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN27: {
      name: "Quàng Nam",
      description: "Quảng Nam có đồng bằng ven biển và vùng núi phía Tây.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN28: {
      name: "Kon Tum",
      description: "Kon Tum là vùng cao nguyên, độ cao trung bình 500-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN29: {
      name: "Quảng Ngãi",
      description: "Quảng Ngãi có đồng bằng ven biển và vùng núi phía Tây.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN30: {
      name: "Gia Lai",
      description: "Gia Lai là cao nguyên, độ cao trung bình 500-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN31: {
      name: "Bình Định",
      description: "Bình Định có đồng bằng ven biển và vùng núi phía Tây.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN32: {
      name: "Phú Yên",
      description: "Phú Yên có đồng bằng ven biển và vùng núi phía Tây.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN33: {
      name: "Đắk Lắk",
      description: "Đắk Lắk là cao nguyên, độ cao trung bình 400-800m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN34: {
      name: "Khánh Hòa",
      description: "Khánh Hòa chủ yếu là đồng bằng ven biển và núi thấp.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN35: {
      name: "Lâm Đồng",
      description: "Lâm Đồng là cao nguyên, độ cao trung bình 800-1500m.",
      color: "#FF9800",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN36: {
      name: "Ninh Thuận",
      description: "Ninh Thuận chủ yếu là đồng bằng ven biển và núi thấp.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN37: {
      name: "Tây Ninh",
      description: "Tây Ninh chủ yếu là đồng bằng, độ cao dưới 200m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN39: {
      name: "Đông Nam Bộ",
      description:
        "Vùng kinh tế trọng điểm phía Nam, chủ yếu là đồng bằng dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN40: {
      name: "Bình Thuận",
      description: "Bình Thuận có đồng bằng ven biển và vùng đồi cát.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN41: {
      name: "Long An",
      description: "Long An là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN43: {
      name: "Bà Rịa - Vũng Tàu",
      description: "Bà Rịa - Vũng Tàu chủ yếu là đồng bằng ven biển.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN44: {
      name: "An Giang",
      description: "An Giang là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN45: {
      name: "Ðong Tháp",
      description: "Đồng Tháp là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN46: {
      name: "Tiền Giang",
      description: "Tiền Giang là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN47: {
      name: "Kiên Giang",
      description: "Kiên Giang là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN49: {
      name: "Vĩnh Long",
      description: "Vĩnh Long là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN50: {
      name: "Bến Tre",
      description: "Bến Tre là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN51: {
      name: "Trà Vinh",
      description: "Trà Vinh là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN52: {
      name: "Sóc Trăng",
      description: "Sóc Trăng là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN53: {
      name: "Đông Bắc",
      description: "Vùng núi Đông Bắc, độ cao trung bình 200-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN54: {
      name: "Bắc Giang",
      description: "Bắc Giang chủ yếu là đồi núi thấp, độ cao 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN55: {
      name: "Bạc Liêu",
      description: "Bạc Liêu là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN56: {
      name: "Bắc Ninh",
      description: "Bắc Ninh là vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN57: {
      name: "Bình Dương",
      description: "Bình Dương chủ yếu là đồng bằng và đồi thấp, dưới 200m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN58: {
      name: "Bình Phước",
      description: "Bình Phước là vùng đồi núi thấp, độ cao 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN59: {
      name: "Cà Mau",
      description: "Cà Mau là vùng cực Nam, đồng bằng thấp dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN61: {
      name: "Hải Dương",
      description: "Hải Dương là vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN63: {
      name: "Hà Nam",
      description: "Hà Nam là vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN66: {
      name: "Đồng Bằng Sông Hồng",
      description: "Vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN67: {
      name: "Nam Định",
      description: "Nam Định là vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VN68: {
      name: "Phú Thọ",
      description: "Phú Thọ có vùng trung du và núi thấp, độ cao 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN69: {
      name: "Thái Nguyên",
      description: "Thái Nguyên chủ yếu là đồi núi thấp, độ cao 200-500m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN70: {
      name: "Vĩnh Phúc",
      description: "Vĩnh Phúc có vùng trung du và đồng bằng, dưới 200m.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VN71: {
      name: "Điện Biên",
      description:
        "Điện Biên là tỉnh miền núi cao, độ cao trung bình trên 1000m.",
      color: "#c46458",
      hover_color: "#A1887F",
      url: "default",
    },
    VN72: {
      name: "Đắk Nông",
      description: "Đắk Nông là cao nguyên, độ cao trung bình 500-1000m.",
      color: "#FFC107",
      hover_color: "#FFD54F",
      url: "default",
    },
    VN73: {
      name: "Hau Giang",
      description: "Hậu Giang là vùng đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VNCT: {
      name: "Can Tho",
      description: "Cần Thơ là trung tâm đồng bằng sông Cửu Long, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VNDN: {
      name: "Đà Nẵng",
      description: "Đà Nẵng có đồng bằng ven biển và núi thấp.",
      color: "#FFEB3B",
      hover_color: "#FFF176",
      url: "default",
    },
    VNHN: {
      name: "Ha Noi",
      description: "Hà Nội là vùng đồng bằng Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VNHP: {
      name: "Hải Phòng",
      description: "Hải Phòng là vùng đồng bằng ven biển Bắc Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VNSG: {
      name: "Hồ Chí Minh city",
      description: "TP. Hồ Chí Minh là vùng đồng bằng Nam Bộ, dưới 50m.",
      color: "#4CAF50",
      hover_color: "#81C784",
      url: "default",
    },
    VNHS: {
      name: "Hoàng Sa",
      description:
        "Quần đảo Hoàng Sa thuộc chủ quyền của Việt Nam, nằm ở Biển Đông.",
      color: "#2196F3", // màu xanh biển
      hover_color: "#1976D2",
      url: "default",
    },
    VNTSA: {
      name: "Trường Sa",
      description:
        "Quần đảo Trường Sa thuộc chủ quyền của Việt Nam, nằm ở Biển Đông.",
      color: "#03A9F4", // màu xanh biển nhạt
      hover_color: "#0288D1",
      url: "default",
    },
  },
locations: {
    0: {
      name: "Hà Nội",
      lat: "21.028167",
      lng: "105.854152",
      location_type: "star",
      description: "Thủ đô Hà Nội - trung tâm chính trị, văn hóa của Việt Nam."
    },
    // Hoàng Sa - các đảo tiêu biểu
    1: {
      name: "Đảo Phú Lâm (Hoàng Sa)",
      lat: "16.522",
      lng: "111.634",
      location_type: "star",
      description: "Đảo Phú Lâm - đảo lớn nhất quần đảo Hoàng Sa."
    },
    2: {
      name: "Đảo Linh Côn (Hoàng Sa)",
      lat: "16.454",
      lng: "111.948",
      location_type: "star",
      description: "Đảo Linh Côn thuộc quần đảo Hoàng Sa."
    },
    3: {
      name: "Đảo Hoàng Sa (Trung tâm)",
      lat: "16.5",
      lng: "112.0",
      location_type: "star",
      description: "Trung tâm quần đảo Hoàng Sa (Việt Nam)."
    },
    // Trường Sa - các đảo tiêu biểu
    4: {
      name: "Đảo Trường Sa Lớn",
      lat: "8.651",
      lng: "112.235",
      location_type: "star",
      description: "Đảo Trường Sa Lớn - đảo lớn nhất quần đảo Trường Sa."
    },
    5: {
      name: "Đảo Song Tử Tây",
      lat: "11.433",
      lng: "114.333",
      location_type: "star",
      description: "Đảo Song Tử Tây thuộc quần đảo Trường Sa."
    },
    6: {
      name: "Đảo Nam Yết",
      lat: "10.183",
      lng: "114.367",
      location_type: "star",
      description: "Đảo Nam Yết thuộc quần đảo Trường Sa."
    },
    7: {
      name: "Trường Sa (Trung tâm)",
      lat: "9.0",
      lng: "114.0",
      location_type: "star",
      description: "Trung tâm quần đảo Trường Sa (Việt Nam)."
    }
},
  labels: {
    VN01: {
      name: "Lai Chau",
      parent_id: "VN01",
    },
    VN02: {
      name: "Lào Cai",
      parent_id: "VN02",
    },
    VN03: {
      name: "Hà Giang",
      parent_id: "VN03",
    },
    VN04: {
      name: "Cao Bằng",
      parent_id: "VN04",
    },
    VN05: {
      name: "Son La",
      parent_id: "VN05",
    },
    VN06: {
      name: "Yên Bái",
      parent_id: "VN06",
    },
    VN07: {
      name: "Tuyên Quang",
      parent_id: "VN07",
    },
    VN09: {
      name: "Lạng Sơn",
      parent_id: "VN09",
    },
    VN13: {
      name: "Quảng Ninh",
      parent_id: "VN13",
    },
    VN14: {
      name: "Hòa Bình",
      parent_id: "VN14",
    },
    VN18: {
      name: "Ninh Bình",
      parent_id: "VN18",
    },
    VN20: {
      name: "Thái Bình",
      parent_id: "VN20",
    },
    VN21: {
      name: "Thanh Hóa",
      parent_id: "VN21",
    },
    VN22: {
      name: "Nghệ An",
      parent_id: "VN22",
    },
    VN23: {
      name: "Ha Tinh",
      parent_id: "VN23",
    },
    VN24: {
      name: "Quảng Bình",
      parent_id: "VN24",
    },
    VN25: {
      name: "Quảng Trị",
      parent_id: "VN25",
    },
    VN26: {
      name: "Thừa Thiên - Huế",
      parent_id: "VN26",
    },
    VN27: {
      name: "Quàng Nam",
      parent_id: "VN27",
    },
    VN28: {
      name: "Kon Tum",
      parent_id: "VN28",
    },
    VN29: {
      name: "Quảng Ngãi",
      parent_id: "VN29",
    },
    VN30: {
      name: "Gia Lai",
      parent_id: "VN30",
    },
    VN31: {
      name: "Bình Định",
      parent_id: "VN31",
    },
    VN32: {
      name: "Phú Yên",
      parent_id: "VN32",
    },
    VN33: {
      name: "Đắk Lắk",
      parent_id: "VN33",
    },
    VN34: {
      name: "Khánh Hòa",
      parent_id: "VN34",
    },
    VN35: {
      name: "Lâm Đồng",
      parent_id: "VN35",
    },
    VN36: {
      name: "Ninh Thuận",
      parent_id: "VN36",
    },
    VN37: {
      name: "Tây Ninh",
      parent_id: "VN37",
    },
    VN39: {
      name: "Đông Nam Bộ",
      parent_id: "VN39",
    },
    VN40: {
      name: "Bình Thuận",
      parent_id: "VN40",
    },
    VN41: {
      name: "Long An",
      parent_id: "VN41",
    },
    VN43: {
      name: "Bà Rịa - Vũng Tàu",
      parent_id: "VN43",
    },
    VN44: {
      name: "An Giang",
      parent_id: "VN44",
    },
    VN45: {
      name: "Ðong Tháp",
      parent_id: "VN45",
    },
    VN46: {
      name: "Tiền Giang",
      parent_id: "VN46",
    },
    VN47: {
      name: "Kiên Giang",
      parent_id: "VN47",
    },
    VN49: {
      name: "Vĩnh Long",
      parent_id: "VN49",
    },
    VN50: {
      name: "Bến Tre",
      parent_id: "VN50",
    },
    VN51: {
      name: "Trà Vinh",
      parent_id: "VN51",
    },
    VN52: {
      name: "Sóc Trăng",
      parent_id: "VN52",
    },
    VN53: {
      name: "Đông Bắc",
      parent_id: "VN53",
    },
    VN54: {
      name: "Bắc Giang",
      parent_id: "VN54",
    },
    VN55: {
      name: "Bạc Liêu",
      parent_id: "VN55",
    },
    VN56: {
      name: "Bắc Ninh",
      parent_id: "VN56",
    },
    VN57: {
      name: "Bình Dương",
      parent_id: "VN57",
    },
    VN58: {
      name: "Bình Phước",
      parent_id: "VN58",
    },
    VN59: {
      name: "Cà Mau",
      parent_id: "VN59",
    },
    VN61: {
      name: "Hải Dương",
      parent_id: "VN61",
    },
    VN63: {
      name: "Hà Nam",
      parent_id: "VN63",
    },
    VN66: {
      name: "Đồng Bằng Sông Hồng",
      parent_id: "VN66",
    },
    VN67: {
      name: "Nam Định",
      parent_id: "VN67",
    },
    VN68: {
      name: "Phú Thọ",
      parent_id: "VN68",
    },
    VN69: {
      name: "Thái Nguyên",
      parent_id: "VN69",
    },
    VN70: {
      name: "Vĩnh Phúc",
      parent_id: "VN70",
    },
    VN71: {
      name: "Điện Biên",
      parent_id: "VN71",
    },
    VN72: {
      name: "Đắk Nông",
      parent_id: "VN72",
    },
    VN73: {
      name: "Hau Giang",
      parent_id: "VN73",
    },
    VNCT: {
      name: "Can Tho",
      parent_id: "VNCT",
    },
    VNDN: {
      name: "Đà Nẵng",
      parent_id: "VNDN",
    },
    VNHN: {
      name: "Ha Noi",
      parent_id: "VNHN",
    },
    VNHP: {
      name: "Hải Phòng",
      parent_id: "VNHP",
    },
    VNSG: {
      name: "Hồ Chí Minh city",
      parent_id: "VNSG",
    },
    VNHS: {
      name: "Hoàng Sa",
      parent_id: "VNHS",
    },
    VNTSA: {
      name: "Trường Sa",
      parent_id: "VNTSA",
    },
  },
};
