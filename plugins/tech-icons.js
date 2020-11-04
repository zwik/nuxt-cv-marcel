import javascript from 'simple-icons/icons/javascript'
import vue from 'simple-icons/icons/vue-dot-js'
import node from 'simple-icons/icons/node-dot-js'
import tailwind from 'simple-icons/icons/tailwindcss'
import git from 'simple-icons/icons/git'
import sencha from 'simple-icons/icons/sencha'
import jenkins from 'simple-icons/icons/jenkins'
import docker from 'simple-icons/icons/docker'
import puppet from 'simple-icons/icons/puppet'
import flash from 'simple-icons/icons/adobefonts'
import photoshop from 'simple-icons/icons/adobephotoshop'
import c from 'simple-icons/icons/c'
import cpp from 'simple-icons/icons/cplusplus'
import java from 'simple-icons/icons/java'
import php from 'simple-icons/icons/php'
import typescript from 'simple-icons/icons/typescript'
import mongo from 'simple-icons/icons/mongodb'

export default function Icons (tech) {
  return tech.reduce((acc, name) => {
    switch (name) {
      case 'Javascript':
        acc.push({
          name,
          icon: javascript.svg
        })
        return acc

      case 'Vue':
        acc.push({
          name,
          icon: vue.svg
        })
        return acc

      case 'Node':
        acc.push({
          name,
          icon: node.svg
        })
        return acc

      case 'Tailwind':
        acc.push({
          name,
          icon: tailwind.svg
        })
        return acc

      case 'Git':
        acc.push({
          name,
          icon: git.svg
        })
        return acc

      case 'Sencha':
        acc.push({
          name,
          icon: sencha.svg
        })
        return acc

      case 'Jenkins':
        acc.push({
          name,
          icon: jenkins.svg
        })
        return acc

      case 'Docker':
        acc.push({
          name,
          icon: docker.svg
        })
        return acc

      case 'Puppet':
        acc.push({
          name,
          icon: puppet.svg
        })
        return acc

      case 'Flash':
      case 'Actionscript':
        acc.push({
          name,
          icon: flash.svg
        })
        return acc

      case 'Photoshop':
        acc.push({
          name,
          icon: photoshop.svg
        })
        return acc

      case 'C':
        acc.push({
          name,
          icon: c.svg
        })
        return acc

      case 'C++':
        acc.push({
          name,
          icon: cpp.svg
        })
        return acc

      case 'Java':
        acc.push({
          name,
          icon: java.svg
        })
        return acc

      case 'PHP':
        acc.push({
          name,
          icon: php.svg
        })
        return acc

      case 'Typescript':
        acc.push({
          name,
          icon: typescript.svg
        })
        return acc

      case 'Mongo':
        acc.push({
          name,
          icon: mongo.svg
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
