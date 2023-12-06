const planets = document.querySelectorAll('.planet')
const moon = document.querySelector('#moon')
const p_orbits = document.querySelectorAll('.p-orbit')
const m_orbit = document.querySelector('#m-orbit')

const p_radii = [11,16.5,25,35,56,69,82.5,95]
let p_radians = new Array(8).fill(0)
const p_velocities = [1.607,1.174,1,0.802,0.434,0.323,0.228,0.182] 

const m_radius = 4
let m_radians = 0
const m_velocity = 10

p_orbits.forEach((p_orbit,index)=>{
    p_orbit.style.height = `${p_radii[index]}%`
    p_orbit.style.width = `${p_radii[index]}%`
})

setInterval(()=>{
    planets.forEach((planet,index)=>{
        planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}%`
        planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}%`
        p_radians[index] += p_velocities[index] * 0.02
    })

    moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius)}%`
    moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius)}%`
    m_radians += m_velocity * 0.02

    m_orbit.style.left = `${earthX()}%`
    m_orbit.style.top = `${earthY()}%`
},1000/60)

function earthX(){
    return Number(planets[2].style.left.split('%')[0])
}

function earthY(){
    return Number(planets[2].style.top.split('%')[0])
}

document.addEventListener('keydown', (e)=> {
    if([1,2,3,4,5].includes(Number(e.key))){
        document.querySelector('body').style.backgroundImage = `url(sky${e.key}.jpg)`
        document.querySelector('html').style.backgroundImage = `url(sky${e.key}.jpg)`
    }
})