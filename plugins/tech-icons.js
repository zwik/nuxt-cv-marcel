import {
  siJavascript, siVuedotjs, siNodedotjs, siTailwindcss, siGit, siSencha, siJenkins, siDocker, siPuppet, siAdobefonts,
  siAdobephotoshop, siC, siCplusplus, siPhp, siTypescript, siMongodb, siMicrosoftsqlserver
} from 'simple-icons/icons'

export default function Icons (tech) {
  return tech.reduce((acc, name) => {
    switch (name) {
      case 'Javascript':
        acc.push({
          name,
          icon: siJavascript.svg
        })
        return acc

      case 'Vue':
        acc.push({
          name,
          icon: siVuedotjs.svg
        })
        return acc

      case 'Node':
        acc.push({
          name,
          icon: siNodedotjs.svg
        })
        return acc

      case 'Tailwind':
        acc.push({
          name,
          icon: siTailwindcss.svg
        })
        return acc

      case 'Git':
        acc.push({
          name,
          icon: siGit.svg
        })
        return acc

      case 'Sencha':
        acc.push({
          name,
          icon: siSencha.svg
        })
        return acc

      case 'Jenkins':
        acc.push({
          name,
          icon: siJenkins.svg
        })
        return acc

      case 'Docker':
        acc.push({
          name,
          icon: siDocker.svg
        })
        return acc

      case 'Puppet':
        acc.push({
          name,
          icon: siPuppet.svg
        })
        return acc

      case 'Flash':
      case 'Actionscript':
        acc.push({
          name,
          icon: siAdobefonts.svg
        })
        return acc

      case 'Photoshop':
        acc.push({
          name,
          icon: siAdobephotoshop.svg
        })
        return acc

      case 'C':
        acc.push({
          name,
          icon: siC.svg
        })
        return acc

      case 'C++':
        acc.push({
          name,
          icon: siCplusplus.svg
        })
        return acc

      case 'Java':
        acc.push({
          name
        })
        return acc

      case 'PHP':
        acc.push({
          name,
          icon: siPhp.svg
        })
        return acc

      case 'Typescript':
        acc.push({
          name,
          icon: siTypescript.svg
        })
        return acc

      case 'Mongo':
        acc.push({
          name,
          icon: siMongodb.svg
        })
        return acc

      case 'MSSQL':
        acc.push({
          name,
          icon: siMicrosoftsqlserver.svg
        })
        return acc

      default:
        acc.push({
          name,
          icon: ''
        })
        return acc
    }
  }, [])
}
