// Vendor Database - Extended dataset
const vendorDatabase = [
  { vendor_id: 'V001', vendor_name: 'Vendor 1', location: 'VV Puram', food_type: 'Dosa', water_source: 'Unknown', handler_hygiene: 'Good', utensil_cleaning: 'Poor', storage_method: 'Covered & Refrigerated', time_since_prep_hrs: 6, ambient_temp_c: 37, humidity_percent: 81, nearby_drainage: false, flies_present: true, waste_nearby: false, risk_score: 12, risk_level: 'High' },
  { vendor_id: 'V002', vendor_name: 'Vendor 2', location: 'VV Puram', food_type: 'Momos', water_source: 'Unknown', handler_hygiene: 'Good', utensil_cleaning: 'Good', storage_method: 'Exposed', time_since_prep_hrs: 3, ambient_temp_c: 26, humidity_percent: 83, nearby_drainage: true, flies_present: false, waste_nearby: true, risk_score: 12, risk_level: 'High' },
  { vendor_id: 'V003', vendor_name: 'Vendor 3', location: 'Jayanagar 4th Block', food_type: 'Panipuri', water_source: 'Tap', handler_hygiene: 'Fair', utensil_cleaning: 'Fair', storage_method: 'Partially Covered', time_since_prep_hrs: 5, ambient_temp_c: 33, humidity_percent: 75, nearby_drainage: true, flies_present: true, waste_nearby: false, risk_score: 14, risk_level: 'High' },
  { vendor_id: 'V004', vendor_name: 'Vendor 4', location: 'JP Nagar', food_type: 'Chaat', water_source: 'Filtered', handler_hygiene: 'Good', utensil_cleaning: 'Good', storage_method: 'Covered Room Temp', time_since_prep_hrs: 2, ambient_temp_c: 28, humidity_percent: 65, nearby_drainage: false, flies_present: false, waste_nearby: false, risk_score: 5, risk_level: 'Medium' },
  { vendor_id: 'V005', vendor_name: 'Vendor 5', location: 'Indiranagar', food_type: 'Juice', water_source: 'Bottled', handler_hygiene: 'Excellent', utensil_cleaning: 'Excellent', storage_method: 'Covered & Refrigerated', time_since_prep_hrs: 1, ambient_temp_c: 27, humidity_percent: 58, nearby_drainage: false, flies_present: false, waste_nearby: false, risk_score: 2, risk_level: 'Low' },
  { vendor_id: 'V006', vendor_name: 'Vendor 6', location: 'Koramangala', food_type: 'Sandwich', water_source: 'Filtered', handler_hygiene: 'Good', utensil_cleaning: 'Excellent', storage_method: 'Covered & Refrigerated', time_since_prep_hrs: 1.5, ambient_temp_c: 26, humidity_percent: 60, nearby_drainage: false, flies_present: false, waste_nearby: false, risk_score: 3, risk_level: 'Low' },
  { vendor_id: 'V007', vendor_name: 'Vendor 7', location: 'VV Puram', food_type: 'Vada Pav', water_source: 'Tap', handler_hygiene: 'Poor', utensil_cleaning: 'Poor', storage_method: 'Exposed', time_since_prep_hrs: 7, ambient_temp_c: 35, humidity_percent: 78, nearby_drainage: true, flies_present: true, waste_nearby: true, risk_score: 16, risk_level: 'High' },
  { vendor_id: 'V008', vendor_name: 'Vendor 8', location: 'Jayanagar 4th Block', food_type: 'Fried Rice', water_source: 'Filtered', handler_hygiene: 'Fair', utensil_cleaning: 'Fair', storage_method: 'Covered Room Temp', time_since_prep_hrs: 3, ambient_temp_c: 31, humidity_percent: 68, nearby_drainage: false, flies_present: true, waste_nearby: false, risk_score: 8, risk_level: 'Medium' },
  { vendor_id: 'V009', vendor_name: 'Vendor 9', location: 'JP Nagar', food_type: 'Dosa', water_source: 'Bottled', handler_hygiene: 'Excellent', utensil_cleaning: 'Good', storage_method: 'Covered & Refrigerated', time_since_prep_hrs: 1, ambient_temp_c: 28, humidity_percent: 62, nearby_drainage: false, flies_present: false, waste_nearby: false, risk_score: 3, risk_level: 'Low' },
  { vendor_id: 'V010', vendor_name: 'Vendor 10', location: 'Indiranagar', food_type: 'Momos', water_source: 'Unknown', handler_hygiene: 'Fair', utensil_cleaning: 'Good', storage_method: 'Partially Covered', time_since_prep_hrs: 4, ambient_temp_c: 32, humidity_percent: 72, nearby_drainage: false, flies_present: true, waste_nearby: false, risk_score: 10, risk_level: 'High' }
];

// Generate additional vendors to reach 120 total
for (let i = 11; i <= 120; i++) {
  const locations = ['VV Puram', 'Jayanagar 4th Block', 'JP Nagar', 'Indiranagar', 'Koramangala'];
  const foodTypes = ['Panipuri', 'Dosa', 'Chaat', 'Juice', 'Sandwich', 'Vada Pav', 'Momos', 'Fried Rice'];
  const waterSources = ['Bottled', 'Filtered', 'Tap', 'Unknown'];
  const hygieneTypes = ['Excellent', 'Good', 'Fair', 'Poor'];
  const storageTypes = ['Covered & Refrigerated', 'Covered Room Temp', 'Partially Covered', 'Exposed'];
  
  const location = locations[Math.floor(Math.random() * locations.length)];
  const foodType = foodTypes[Math.floor(Math.random() * foodTypes.length)];
  const waterSource = waterSources[Math.floor(Math.random() * waterSources.length)];
  const handlerHygiene = hygieneTypes[Math.floor(Math.random() * hygieneTypes.length)];
  const utensilCleaning = hygieneTypes[Math.floor(Math.random() * hygieneTypes.length)];
  const storageMethod = storageTypes[Math.floor(Math.random() * storageTypes.length)];
  const timePrep = Math.floor(Math.random() * 8) + 0.5;
  const temp = Math.floor(Math.random() * 13) + 26;
  const humidity = Math.floor(Math.random() * 45) + 40;
  const drainage = Math.random() > 0.6;
  const flies = Math.random() > 0.5;
  const waste = Math.random() > 0.7;
  
  const riskScore = calculateRiskScore({
    water_source: waterSource,
    handler_hygiene: handlerHygiene,
    utensil_cleaning: utensilCleaning,
    storage_method: storageMethod,
    time_since_prep: timePrep,
    ambient_temp: temp,
    humidity: humidity,
    nearby_drainage: drainage,
    flies_present: flies,
    waste_nearby: waste
  });
  
  let riskLevel = 'Low';
  if (riskScore >= 9) riskLevel = 'High';
  else if (riskScore >= 5) riskLevel = 'Medium';
  
  vendorDatabase.push({
    vendor_id: `V${String(i).padStart(3, '0')}`,
    vendor_name: `Vendor ${i}`,
    location,
    food_type: foodType,
    water_source: waterSource,
    handler_hygiene: handlerHygiene,
    utensil_cleaning: utensilCleaning,
    storage_method: storageMethod,
    time_since_prep_hrs: timePrep,
    ambient_temp_c: temp,
    humidity_percent: humidity,
    nearby_drainage: drainage,
    flies_present: flies,
    waste_nearby: waste,
    risk_score: riskScore,
    risk_level: riskLevel
  });
}

// Recommendations database
const recommendations = {
  water_source: { issue: 'Unsafe water source detected', action: 'Switch to bottled or properly filtered water for food preparation and cleaning' },
  handler_hygiene: { issue: 'Poor handler hygiene practices', action: 'Implement regular handwashing, use gloves, and maintain personal cleanliness' },
  utensil_cleaning: { issue: 'Inadequate utensil cleaning', action: 'Clean utensils with running water and soap after each use' },
  storage: { issue: 'Improper food storage', action: 'Store food covered and refrigerated when possible, minimize exposure time' },
  time_since_prep: { issue: 'Food stored too long', action: 'Prepare food fresh or reduce holding time to less than 2 hours' },
  temperature: { issue: 'High ambient temperature', action: 'Use cooling methods, shade, or refrigeration to maintain food safety' },
  humidity: { issue: 'High humidity levels', action: 'Ensure proper ventilation and food covering to prevent moisture contamination' },
  drainage: { issue: 'Proximity to drainage', action: 'Relocate stall away from drainage or improve drainage system' },
  flies: { issue: 'Flies present', action: 'Use nets, covers, and maintain cleanliness to prevent fly contamination' },
  waste: { issue: 'Waste nearby', action: 'Ensure regular waste disposal and maintain distance from waste collection points' }
};

// Risk calculation function
function calculateRiskScore(data) {
  let score = 0;
  
  // Water source
  const waterScores = { 'Bottled': 0, 'Filtered': 1, 'Tap': 2, 'Unknown': 3 };
  score += waterScores[data.water_source] || 0;
  
  // Handler hygiene
  const hygieneScores = { 'Excellent': 0, 'Good': 1, 'Fair': 2, 'Poor': 3 };
  score += hygieneScores[data.handler_hygiene] || 0;
  
  // Utensil cleaning
  score += hygieneScores[data.utensil_cleaning] || 0;
  
  // Storage method
  const storageScores = { 'Covered & Refrigerated': 0, 'Covered Room Temp': 1, 'Partially Covered': 2, 'Exposed': 3 };
  score += storageScores[data.storage_method] || 0;
  
  // Time since prep
  if (data.time_since_prep > 4) score += 2;
  else if (data.time_since_prep >= 2) score += 1;
  
  // Temperature
  if (data.ambient_temp > 32) score += 1;
  
  // Humidity
  if (data.humidity > 70) score += 1;
  
  // Environmental factors
  if (data.nearby_drainage) score += 1;
  if (data.flies_present) score += 1;
  if (data.waste_nearby) score += 1;
  
  return score;
}

// Get risk level from score
function getRiskLevel(score) {
  if (score <= 4) return 'Low';
  if (score <= 8) return 'Medium';
  return 'High';
}

// Get risk color class
function getRiskColorClass(level) {
  if (level === 'Low') return 'risk-low';
  if (level === 'Medium') return 'risk-medium';
  return 'risk-high';
}

// Generate recommendations based on data
function generateRecommendations(data) {
  const recs = [];
  
  if (data.water_source === 'Tap' || data.water_source === 'Unknown') {
    recs.push(recommendations.water_source);
  }
  
  if (data.handler_hygiene === 'Fair' || data.handler_hygiene === 'Poor') {
    recs.push(recommendations.handler_hygiene);
  }
  
  if (data.utensil_cleaning === 'Fair' || data.utensil_cleaning === 'Poor') {
    recs.push(recommendations.utensil_cleaning);
  }
  
  if (data.storage_method === 'Partially Covered' || data.storage_method === 'Exposed') {
    recs.push(recommendations.storage);
  }
  
  if (data.time_since_prep >= 4) {
    recs.push(recommendations.time_since_prep);
  }
  
  if (data.ambient_temp > 32) {
    recs.push(recommendations.temperature);
  }
  
  if (data.humidity > 70) {
    recs.push(recommendations.humidity);
  }
  
  if (data.nearby_drainage) {
    recs.push(recommendations.drainage);
  }
  
  if (data.flies_present) {
    recs.push(recommendations.flies);
  }
  
  if (data.waste_nearby) {
    recs.push(recommendations.waste);
  }
  
  return recs;
}

// App state and navigation
const app = {
  currentView: 'home',
  filteredVendors: [...vendorDatabase],
  
  init() {
    this.setupNavigation();
    this.setupForm();
    this.renderVendorDatabase();
    this.setupFilters();
    this.drawChart();
    this.animateStats();
  },
  
  animateStats() {
    const statCards = document.querySelectorAll('.stat-value');
    const targets = [120, 78, 35, 7];
    
    statCards.forEach((card, index) => {
      const target = targets[index];
      let current = 0;
      const increment = Math.ceil(target / 50);
      const duration = 1500;
      const stepTime = duration / (target / increment);
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          card.textContent = target;
          clearInterval(counter);
        } else {
          card.textContent = current;
        }
      }, stepTime);
    });
  },
  
  setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        this.navigateToView(view);
      });
    });
  },
  
  navigateToView(view) {
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-view') === view);
    });
    
    // Update view active state
    document.querySelectorAll('.view').forEach(v => {
      v.classList.toggle('active', v.id === `${view}-view`);
    });
    
    this.currentView = view;
    
    // Scroll to top
    window.scrollTo(0, 0);
  },
  
  fillDemoForm(riskLevel) {
    const form = document.getElementById('prediction-form');
    let demoData;
    
    if (riskLevel === 'high') {
      demoData = {
        location: 'VV Puram',
        food_type: 'Panipuri',
        water_source: 'Tap',
        handler_hygiene: 'Poor',
        utensil_cleaning: 'Poor',
        storage_method: 'Exposed',
        time_since_prep: 6,
        ambient_temp: 36,
        humidity: 80,
        nearby_drainage: true,
        flies_present: true,
        waste_nearby: true
      };
    } else if (riskLevel === 'medium') {
      demoData = {
        location: 'JP Nagar',
        food_type: 'Chaat',
        water_source: 'Filtered',
        handler_hygiene: 'Good',
        utensil_cleaning: 'Fair',
        storage_method: 'Covered Room Temp',
        time_since_prep: 3,
        ambient_temp: 30,
        humidity: 68,
        nearby_drainage: false,
        flies_present: false,
        waste_nearby: true
      };
    } else {
      demoData = {
        location: 'Indiranagar',
        food_type: 'Juice',
        water_source: 'Bottled',
        handler_hygiene: 'Excellent',
        utensil_cleaning: 'Excellent',
        storage_method: 'Covered & Refrigerated',
        time_since_prep: 1,
        ambient_temp: 27,
        humidity: 55,
        nearby_drainage: false,
        flies_present: false,
        waste_nearby: false
      };
    }
    
    // Fill form fields
    form.querySelector('[name="location"]').value = demoData.location;
    form.querySelector('[name="food_type"]').value = demoData.food_type;
    form.querySelector('[name="water_source"]').value = demoData.water_source;
    form.querySelector('[name="handler_hygiene"]').value = demoData.handler_hygiene;
    form.querySelector('[name="utensil_cleaning"]').value = demoData.utensil_cleaning;
    form.querySelector('[name="storage_method"]').value = demoData.storage_method;
    form.querySelector('[name="time_since_prep"]').value = demoData.time_since_prep;
    form.querySelector('[name="ambient_temp"]').value = demoData.ambient_temp;
    form.querySelector('[name="humidity"]').value = demoData.humidity;
    
    // Update slider displays
    document.getElementById('temp-value').textContent = demoData.ambient_temp;
    document.getElementById('humidity-value').textContent = demoData.humidity;
    
    // Set checkboxes
    form.querySelector('[name="nearby_drainage"]').checked = demoData.nearby_drainage;
    form.querySelector('[name="flies_present"]').checked = demoData.flies_present;
    form.querySelector('[name="waste_nearby"]').checked = demoData.waste_nearby;
    
    // Scroll to form actions
    form.querySelector('.form-actions').scrollIntoView({ behavior: 'smooth', block: 'center' });
  },
  
  setupForm() {
    const form = document.getElementById('prediction-form');
    const tempSlider = document.querySelector('input[name="ambient_temp"]');
    const humiditySlider = document.querySelector('input[name="humidity"]');
    
    // Update slider values display
    tempSlider.addEventListener('input', (e) => {
      document.getElementById('temp-value').textContent = e.target.value;
    });
    
    humiditySlider.addEventListener('input', (e) => {
      document.getElementById('humidity-value').textContent = e.target.value;
    });
    
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handlePrediction(form);
    });
  },
  
  handlePrediction(form) {
    const formData = new FormData(form);
    const data = {
      location: formData.get('location'),
      food_type: formData.get('food_type'),
      water_source: formData.get('water_source'),
      handler_hygiene: formData.get('handler_hygiene'),
      utensil_cleaning: formData.get('utensil_cleaning'),
      storage_method: formData.get('storage_method'),
      time_since_prep: parseFloat(formData.get('time_since_prep')),
      ambient_temp: parseFloat(formData.get('ambient_temp')),
      humidity: parseFloat(formData.get('humidity')),
      nearby_drainage: formData.has('nearby_drainage'),
      flies_present: formData.has('flies_present'),
      waste_nearby: formData.has('waste_nearby')
    };
    
    // Show loading
    const btn = form.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn-text');
    const btnLoader = btn.querySelector('.btn-loader');
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline';
    btn.disabled = true;
    
    // Simulate processing
    setTimeout(() => {
      const riskScore = calculateRiskScore(data);
      const riskLevel = getRiskLevel(riskScore);
      const recs = generateRecommendations(data);
      
      this.showResults({ ...data, risk_score: riskScore, risk_level: riskLevel }, recs);
      
      // Reset button
      btnText.style.display = 'inline';
      btnLoader.style.display = 'none';
      btn.disabled = false;
    }, 800);
  },
  
  showResults(data, recs) {
    const modal = document.getElementById('results-modal');
    const content = document.getElementById('results-content');
    
    const riskClass = getRiskColorClass(data.risk_level);
    
    let recsHTML = '';
    if (recs.length > 0) {
      recsHTML = '<ul class="recommendations-list">';
      recs.forEach(rec => {
        recsHTML += `
          <li class="recommendation-item">
            <div class="recommendation-issue">${rec.issue}</div>
            <div class="recommendation-action">✓ ${rec.action}</div>
          </li>
        `;
      });
      recsHTML += '</ul>';
    } else {
      recsHTML = '<p style="color: var(--color-success); font-weight: 500;">✓ All factors within acceptable range. Continue maintaining good practices!</p>';
    }
    
    content.innerHTML = `
      <div class="result-header">
        <h2>Risk Assessment Results</h2>
        <div class="risk-score-display ${riskClass} ${data.risk_level === 'High' ? 'pulse' : ''}">${data.risk_score}</div>
        <div class="risk-level-display ${riskClass}">${data.risk_level} Risk</div>
        <p style="color: var(--color-text-secondary); margin-top: var(--space-8);">
          ${data.food_type} at ${data.location}
        </p>
      </div>
      
      <div class="result-section">
        <h3>Risk Interpretation</h3>
        <p>${this.getRiskInterpretation(data.risk_level)}</p>
      </div>
      
      <div class="result-section">
        <h3>Recommendations</h3>
        ${recsHTML}
      </div>
      
      <div style="margin-top: var(--space-24); display: flex; gap: var(--space-12);">
        <button class="btn btn--primary" onclick="app.closeModal(); app.navigateToView('predict');">Analyze Another Vendor</button>
        <button class="btn btn--outline" onclick="app.downloadReport(${JSON.stringify(data).replace(/"/g, '&quot;')})" style="background: transparent; border: 1px solid var(--color-border); color: var(--color-text);">Download Report</button>
      </div>
    `;
    
    modal.classList.add('active');
  },
  
  getRiskInterpretation(level) {
    if (level === 'Low') return 'This vendor demonstrates good food safety practices. The food is generally safe for consumption with minimal risk of foodborne illness.';
    if (level === 'Medium') return 'This vendor has some areas of concern. Exercise caution and consider the recommendations before consuming. Improvements in hygiene practices would significantly reduce risk.';
    return 'This vendor presents significant food safety concerns. Multiple risk factors indicate high probability of foodborne illness. Avoid consumption until improvements are made, or choose alternative vendors.';
  },
  
  closeModal() {
    document.getElementById('results-modal').classList.remove('active');
  },
  
  downloadReport(data) {
    const report = `
BANGALORE STREET FOOD SAFETY REPORT
====================================

Vendor Assessment Results
Date: ${new Date().toLocaleDateString()}

--- BASIC INFORMATION ---
Location: ${data.location}
Food Type: ${data.food_type}

--- RISK ASSESSMENT ---
Risk Score: ${data.risk_score}
Risk Level: ${data.risk_level}

--- FACTORS EVALUATED ---
Water Source: ${data.water_source}
Handler Hygiene: ${data.handler_hygiene}
Utensil Cleaning: ${data.utensil_cleaning}
Storage Method: ${data.storage_method}
Time Since Preparation: ${data.time_since_prep} hours
Ambient Temperature: ${data.ambient_temp}°C
Humidity: ${data.humidity}%
Nearby Drainage: ${data.nearby_drainage ? 'Yes' : 'No'}
Flies Present: ${data.flies_present ? 'Yes' : 'No'}
Waste Nearby: ${data.waste_nearby ? 'Yes' : 'No'}

--- INTERPRETATION ---
${this.getRiskInterpretation(data.risk_level)}

====================================
Generated by Bangalore Street Food Safety Monitor
    `;
    
    const blob = new Blob([report], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vendor-risk-report-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  },
  
  renderVendorDatabase() {
    const grid = document.getElementById('vendor-grid');
    
    if (this.filteredVendors.length === 0) {
      grid.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); grid-column: 1/-1;">No vendors found matching your criteria.</p>';
      return;
    }
    
    grid.innerHTML = this.filteredVendors.map(vendor => {
      const statusClass = vendor.risk_level === 'Low' ? 'status--success' : vendor.risk_level === 'Medium' ? 'status--warning' : 'status--error';
      return `
        <div class="vendor-card" onclick="app.showVendorDetail('${vendor.vendor_id}')">
          <div class="vendor-header">
            <div class="vendor-id">${vendor.vendor_id}</div>
            <span class="status ${statusClass}">${vendor.risk_level}</span>
          </div>
          <div class="vendor-info">
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Location</span>
              <span class="vendor-detail-value">${vendor.location}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Food Type</span>
              <span class="vendor-detail-value">${vendor.food_type}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Risk Score</span>
              <span class="vendor-detail-value">${vendor.risk_score}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },
  
  setupFilters() {
    const searchInput = document.getElementById('search-input');
    const locationFilter = document.getElementById('location-filter');
    const riskFilter = document.getElementById('risk-filter');
    
    const applyFilters = () => {
      const searchTerm = searchInput.value.toLowerCase();
      const location = locationFilter.value;
      const risk = riskFilter.value;
      
      this.filteredVendors = vendorDatabase.filter(vendor => {
        const matchesSearch = vendor.vendor_id.toLowerCase().includes(searchTerm) || 
                             vendor.vendor_name.toLowerCase().includes(searchTerm);
        const matchesLocation = !location || vendor.location === location;
        const matchesRisk = !risk || vendor.risk_level === risk;
        
        return matchesSearch && matchesLocation && matchesRisk;
      });
      
      this.renderVendorDatabase();
    };
    
    searchInput.addEventListener('input', applyFilters);
    locationFilter.addEventListener('change', applyFilters);
    riskFilter.addEventListener('change', applyFilters);
  },
  
  showVendorDetail(vendorId) {
    const vendor = vendorDatabase.find(v => v.vendor_id === vendorId);
    if (!vendor) return;
    
    const modal = document.getElementById('vendor-modal');
    const content = document.getElementById('vendor-detail-content');
    const statusClass = vendor.risk_level === 'Low' ? 'status--success' : vendor.risk_level === 'Medium' ? 'status--warning' : 'status--error';
    
    content.innerHTML = `
      <div style="margin-bottom: var(--space-24);">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--space-16);">
          <h2>${vendor.vendor_id} - ${vendor.vendor_name}</h2>
          <span class="status ${statusClass}">${vendor.risk_level} Risk</span>
        </div>
        <p style="color: var(--color-text-secondary);">Score: ${vendor.risk_score}</p>
      </div>
      
      <div class="card">
        <div class="card__body">
          <h3 style="margin-bottom: var(--space-16);">Vendor Details</h3>
          <div style="display: grid; gap: var(--space-12);">
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Location</span>
              <span class="vendor-detail-value">${vendor.location}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Food Type</span>
              <span class="vendor-detail-value">${vendor.food_type}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Water Source</span>
              <span class="vendor-detail-value">${vendor.water_source}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Handler Hygiene</span>
              <span class="vendor-detail-value">${vendor.handler_hygiene}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Utensil Cleaning</span>
              <span class="vendor-detail-value">${vendor.utensil_cleaning}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Storage Method</span>
              <span class="vendor-detail-value">${vendor.storage_method}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Time Since Prep</span>
              <span class="vendor-detail-value">${vendor.time_since_prep_hrs} hours</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Temperature</span>
              <span class="vendor-detail-value">${vendor.ambient_temp_c}°C</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Humidity</span>
              <span class="vendor-detail-value">${vendor.humidity_percent}%</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Nearby Drainage</span>
              <span class="vendor-detail-value">${vendor.nearby_drainage ? 'Yes' : 'No'}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Flies Present</span>
              <span class="vendor-detail-value">${vendor.flies_present ? 'Yes' : 'No'}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Waste Nearby</span>
              <span class="vendor-detail-value">${vendor.waste_nearby ? 'Yes' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
  },
  
  closeVendorModal() {
    document.getElementById('vendor-modal').classList.remove('active');
  },
  
  drawChart() {
    const canvas = document.getElementById('riskChart');
    const ctx = canvas.getContext('2d');
    
    // Data
    const data = [78, 35, 7];
    const labels = ['High Risk', 'Medium Risk', 'Low Risk'];
    const colors = ['#F44336', '#FF9800', '#4CAF50'];
    
    // Calculate total
    const total = data.reduce((a, b) => a + b, 0);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw bars
    const barWidth = 80;
    const spacing = 40;
    const maxHeight = 200;
    const maxValue = Math.max(...data);
    const startX = (canvas.width - (barWidth * 3 + spacing * 2)) / 2;
    const startY = 240;
    
    data.forEach((value, index) => {
      const x = startX + (barWidth + spacing) * index;
      const height = (value / maxValue) * maxHeight;
      const y = startY - height;
      
      // Draw bar
      ctx.fillStyle = colors[index];
      ctx.fillRect(x, y, barWidth, height);
      
      // Draw value on bar
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(value, x + barWidth / 2, y + 25);
      
      // Draw label
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
      ctx.font = '14px sans-serif';
      ctx.fillText(labels[index], x + barWidth / 2, startY + 25);
      
      // Draw percentage
      const percentage = Math.round((value / total) * 100);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim();
      ctx.font = '12px sans-serif';
      ctx.fillText(`${percentage}%`, x + barWidth / 2, startY + 45);
    });
  }
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}
